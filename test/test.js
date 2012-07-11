var fs = require('fs'),
  should = require('should'),
  colors = require('colors'),
  request = require('request'),
  querystring = require('querystring'),
  _ = require('underscore'),
  moment = require('moment'),
  redis = require('redis'),
  async = require('async'),
  zlib = require('zlib'),
  http = require('http');

var app = require('../app');

http.globalAgent.maxSockets = 100;

// curl -H "apikey:9c6fcc17c9d9282f4f2029e9a26e4e1c" --verbose 'http://127.0.0.1:8080/artistportal/search/resources?q=fool+in+love' > /dev/null

describe('Flo', function() {

  var config = {},
    cache = {};

  before(function() {
    config = JSON.parse(fs.readFileSync(__dirname + '/../config/test.config.json').toString());

    cache.flow = redis.createClient();
    cache.flow.select(config.cache.flow.database);
    cache.flow.flushdb();

    cache.response = redis.createClient();
    cache.response.select(config.cache.response.database);
    cache.response.flushdb();
  });

  describe('API Key Middleware', function() {
    it('should allow a key and return a proxied response', function(done) {

      request({
        url: 'http://localhost:3010/app1/',
        headers: {
          'apikey': 'd8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.exist(res.headers);

          body.should.be.equal('Hello from test server app1');

          res.headers.should.have.property('x-powered-by', 'Flo');
          res.headers.should.have.property('flo-ratelimit-limit', '10000000');
          res.headers.should.have.property('flo-ratelimit-reset', '3600');
          res.headers.should.have.property('flo-ratelimit-remaining', '9999999');
          res.headers.should.have.property('content-type', 'text/html; charset=utf-8');

          done();
        }
      });

    });

    it('should deny an invalid key', function(done) {

      request({
        url: 'http://localhost:3010/app1/',
        headers: {
          'apikey': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(403);
          should.exist(res.headers);
          done();
        }
      });

    });


    it('should deny a non-enabled user', function(done) {

      request({
        url: 'http://localhost:3010/app1/',
        headers: {
          'apikey': '59c02e9fd89cfb6fa54b67e846d0631b'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(503);
          should.exist(res.headers);

          res.headers.should.have.property('flo-account-enabled', 'false');

          body.should.equal('{"status":503,"msg":"Account not enabled"}');
          done();
        }
      });

    });

    it('should rate limit users based on their access rights', function(done) {

      async.series({
        shouldWork: function(callback) {
          request({
            url: 'http://localhost:3010/app1/',
            headers: {
              'apikey': 'cbfdaaa3f5401f3fa1c394a5e5f9e414'
            }
          }, function(err, res, body) {
            if (err) {
              done(err);
            } else {
              res.statusCode.should.be.equal(200);
              should.exist(res.headers);

              res.headers.should.have.property('flo-ratelimit-limit', '1');
              res.headers.should.have.property('flo-ratelimit-remaining', '0');

              body.should.be.equal('Hello from test server app1');
              callback();
            }
          });
        },
        shouldFail: function(callback) {
          request({
            url: 'http://localhost:3010/app1/',
            headers: {
              'apikey': 'cbfdaaa3f5401f3fa1c394a5e5f9e414'
            }
          }, function(err, res, body) {
            if (err) {
              done(err);
            } else {
              res.statusCode.should.be.equal(503);
              should.exist(res.headers);

              res.headers.should.have.property('flo-ratelimit-limit', '1');
              res.headers.should.have.property('flo-ratelimit-remaining', '0');
              body.should.equal('{"status":503,"msg":"Rate limit exceeded"}');

              callback();
            }
          });
        }
      }, function(err, results) {
        done();
      });
    });

  });

  // Compression
  describe('API Compression', function() {
    it('should gzip response', function(done) {

      request({
        url: 'http://localhost:3010/app1/',
        headers: {
          'apikey': 'd8e8fca2dc0f896fd7cb4cb0031ba249',
          'Accept-Encoding': 'gzip,deflate'
        },
        encoding: null
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.exist(res.headers);

          body.should.not.be.equal('Hello from test server app1');

          zlib.gunzip(res.body, function(err, data) {
            data.toString().should.be.equal('Hello from test server app1');
            done();
          });
        }
      });
    });
  });

  describe('Should not serve coffee', function() {
    it('should be a teapot', function(done) {

      request({
        url: 'http://localhost:3010/teapot'
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(418);
          should.exist(res.headers);

          body.should.be.equal('I\'m a teapot');
          done();
        }
      });
    });
  });

  describe('Should provide admin API', function() {
    it('should return the users', function(done) {

      request({
        url: 'http://localhost:3010/admin/users'
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.exist(res.headers);

          // // users should have the correct properties
          // var users = JSON.parse(body);
          // _.each(users, function(user, key) {
          //   user.should.have.property('name');
          //   user.should.have.property('email');
          //   user.should.have.property('flowrate');
          // });
          done();
        }
      });
    });
  });


  describe('Should remove trailing slashes from URLs unless configured', function() {
    it('should trim the slash', function(done) {

      request({
        url: 'http://localhost:3010/app1/simple/?a=b',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.exist(res.headers);
          body.should.be.equal('/simple');

          done();
        }
      });
    });

    it('should not trim the slash', function(done) {

      request({
        url: 'http://localhost:3010/app2/simple/',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.exist(res.headers);
          body.should.be.equal('/simple/');

          done();
        }
      });
    });

    it('should not trim the slash when a querystring is also present', function(done) {

      request({
        url: 'http://localhost:3010/app2/simple/?a=b',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.exist(res.headers);
          body.should.be.equal('/simple/');

          done();
        }
      });
    });
  });


  describe('Should proxy http status codes', function() {

    it('should handle a redirect', function(done) {
      request({
        url: 'http://localhost:3010/app1/redirect/to/path',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        },
        followRedirect: false
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(302);
          should.exist(res.headers.location);
          res.headers.location.should.be.equal('http://localhost:3010/app1/a/more/complex/path');
          done();
        }
      });
    });

    it('should handle a redirect to the root', function(done) {
      request({
        url: 'http://localhost:3010/app1/redirect',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        },
        followRedirect: false
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(302);
          should.exist(res.headers.location);
          res.headers.location.should.be.equal('http://localhost:3010/app1/');
          done();
        }
      });
    });


    it('should handle a permenant redirect', function(done) {
      request({
        url: 'http://localhost:3010/app1/redirect301',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        },
        followRedirect: false
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(301);
          should.exist(res.headers.location);
          res.headers.location.should.be.equal('http://localhost:3010/app1/');
          done();
        }
      });
    });

  });



  describe('Should proxy custom headers if configured', function() {

    it('should pass a custom header', function(done) {
      request({
        url: 'http://localhost:3010/app1/header/banana',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249',
          'X-Banana': 'Yummy'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          body.should.be.equal('Yummy');
          done();
        }
      });
    });

    it('should pass a custom header and vary cache content', function(done) {
      request({
        url: 'http://localhost:3010/app1/header/banana',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249',
          'X-Banana': 'Still Yummy'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          body.should.be.equal('Still Yummy');
          done();
        }
      });
    });

    it('should receive custom headers', function(done) {
      request({
        url: 'http://localhost:3010/app1/headers',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          body.should.be.equal('headers');
          res.headers['x-peach'].should.be.equal('Nice tasty peach');
          res.headers['x-orange'].should.be.equal('Nice tasty orange');
          done();
        }
      });
    });

  });

  describe('Should pass content type headers', function() {

    it('should pass a json header', function(done) {
      request({
        url: 'http://localhost:3010/app1/contenttype',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: '{ \"a\" : true }'
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          var response = JSON.parse(body);
          res.statusCode.should.be.equal(200);
          res.headers['content-type'].should.match(/application\/json/i);
          response.msg.should.be.equal('Hello World');
          done();
        }
      });
    });

    it('should pass an html header', function(done) {
      request({
        url: 'http://localhost:3010/app1/contenttype',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249',
          'Content-Type': 'text/html'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          res.headers['content-type'].should.match(/text\/html/i);
          body.should.be.equal('<html><body>Hello World <em>HTML</em><body></html>');
          done();
        }
      });
    });

    it('should pass a text header', function(done) {
      request({
        url: 'http://localhost:3010/app1/contenttype',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249',
          'Content-Type': 'text/plain'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          res.headers['content-type'].should.match(/text\/plain/i);
          body.should.be.equal('text');
          done();
        }
      });
    });


  });



  describe('Should check Cache-Control headers before caching', function() {

    it('should cache items', function(done) {
      request({
        url: 'http://localhost:3010/app1/cachecontrol/2',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      }, function(err, res, body) {
        if (err) {
          done(err);
        } else {
          res.statusCode.should.be.equal(200);
          should.not.exist(res.headers['flo-found-in-cache']);
          body.should.be.equal('content');
          done();
        }
      });
    });


    it('should cache for 1 second', function(done) {

      var cacherequest = {
        url: 'http://localhost:3010/app1/cachecontrol/1',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      };

      async.series({
        shouldNotBeCached: function(callback) {
          request(cacherequest, function(err, res, body) {
            if (err) {
              done(err);
            } else {
              res.statusCode.should.be.equal(200);
              should.not.exist(res.headers['flo-found-in-cache']);
              body.should.be.equal('content');
              callback(err);
            }
          });
        },
        shouldBeCached: function(callback) {
          request(cacherequest, function(err, res, body) {
            if (err) {
              done(err);
            } else {
              res.statusCode.should.be.equal(200);
              should.exist(res.headers['flo-found-in-cache']);
              body.should.be.equal('content');
              callback(err);
            }
          });
        },
        shouldNotBeCachedAfterExpiry: function(callback) {
          setTimeout(function() {
            request(cacherequest, function(err, res, body) {
              if (err) {
                done(err);
              } else {
                res.statusCode.should.be.equal(200);
                should.not.exist(res.headers['flo-found-in-cache']);
                body.should.be.equal('content');
                callback(err);
              }
            });
          }, 2000);
        }
      }, function(err, results) {
        done(err);
      });
    });


    it('should not cache private items', function(done) {

      var cacherequest = {
        url: 'http://localhost:3010/app1/cachecontrol/private',
        headers: {
          'apikey': 'e8e8fca2dc0f896fd7cb4cb0031ba249'
        }
      };

      async.series({
        shouldNotBeCached: function(callback) {
          request(cacherequest, function(err, res, body) {
            if (err) {
              done(err);
            } else {
              res.statusCode.should.be.equal(200);
              should.not.exist(res.headers['flo-found-in-cache']);
              body.should.be.equal('content');
              callback(err);
            }
          });
        },
        shouldStillNotBeCached: function(callback) {
          request(cacherequest, function(err, res, body) {
            if (err) {
              done(err);
            } else {
              res.statusCode.should.be.equal(200);
              should.not.exist(res.headers['flo-found-in-cache']);
              body.should.be.equal('content');
              callback(err);
            }
          });
        },
        shouldStillNotBeCachedAfterExpiry: function(callback) {
          setTimeout(function() {
            request(cacherequest, function(err, res, body) {
              if (err) {
                done(err);
              } else {
                res.statusCode.should.be.equal(200);
                should.not.exist(res.headers['flo-found-in-cache']);
                body.should.be.equal('content');
                callback(err);
              }
            });
          }, 1500);
        }
      }, function(err, results) {
        done(err);
      });
    });

  });


  describe('Should provide admin user access', function() {
    var users = require('../routes/admin/users');
    var user, apikey;

    it('should not add a user with missing email', function(done) {
      users.addUser({
        'name': 'Test User'
      }, function(err, res) {
        should.exist(err, 'User requires an email');
        should.not.exist(res);
        done();
      });
    });

    it('should add a user', function(done) {
      users.addUser({
        'name': 'Test User',
        'email': 'Test.User@umusic.net'
      }, function(err, res) {
        if (err) {
          done(err);
        } else {
          res.should.be.equal('8c34a58900853a12a2ee7962dd9beb14');
          apikey = res;
          done();
        }
      });
    });

    it('should get a user', function(done) {
      users.getUser(apikey, null, function(err, res) {
        if (err) {
          done(err);
        } else {
          user = res;
          done();
        }
      });
    });

    it('should update a user', function(done) {
      user.name = 'Test User #Updated';
      users.updateUser(apikey, user, function(err) {
        if (err) {
          done(err);
        } else {

          done();
        }
      });
    });

    it('should delete a user', function(done) {
      users.deleteUser(apikey, function(err) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
    });

  });


  after(function() {
    cache.flow.flushdb();
    cache.response.flushdb();
  });

});