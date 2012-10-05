var fs = require('fs'),
  should = require('should'),
  _ = require('underscore');

describe('Dist files ', function() {

  it('countries.js should exist', function(done) {
    fs.stat(__dirname + '/../dist/countries.js', function(err, file) {
      if (err) throw err;
      file.should.be.a('object');
      done();
    });
  });

  it('countries.min.js should exist', function(done) {
    fs.stat(__dirname + '/../dist/countries.min.js', function(err, file) {
      if (err) throw err;
      file.should.be.a('object');
      done();
    });
  });

});


var iso = require('../');

describe('ISO', function() {

  it('should be an object', function() {
    iso.should.be.a('object');
  });

  it('should have a `version` property', function() {
    iso.should.have.property('version');
  });

  it('should have a `noConflict` function', function() {
    iso.noConflict.should.be.a('function');
  });

});
 
describe('ISO Country Codes', function() {

  it('should have a `countries` property', function() {
    should.exist(iso.countries);
    iso.countries.should.have.property('AF');
    iso.countries['AF'].should.have.property('name', 'Afghanistan');
    iso.countries['AF'].should.have.property('value', 'AF');
  });

});

describe('ISO Currency Codes', function() {

  it('should have a `currencies` property', function() {
    should.exist(iso.currencies);
    iso.currencies.should.have.property('AFN');
    iso.currencies['AFN'].should.have.property('value', 'AFN');
    iso.currencies['AFN'].countries.should.have.length(1);
  });

});

describe('ISO Country find methods', function() {
  
  it('should have a `findCountryByCode` function', function() {
    iso.findCountryByCode.should.be.a('function');
    iso.findCountryByCode('AF').should.eql(iso.countries['AF']);
    iso.findCountryByCode('AFG').should.eql(iso.countries['AF']);
    should.not.exist(iso.findCountryByCode('Fake_Nation'));
  });

  it('should have a `findCountryByNumber` function', function() {
    iso.findCountryByNumber.should.be.a('function');
    iso.findCountryByNumber('004').should.eql(iso.countries['AF']);
    iso.findCountryByNumber('4').should.eql(iso.countries['AF']);
    iso.findCountryByNumber(4).should.eql(iso.countries['AF']);
    should.not.exist(iso.findCountryByNumber(999999999));
  });

  it('should have a `findCountryByName` function', function() {
    iso.findCountryByName.should.be.a('function');
    iso.findCountryByName('Afghanistan').should.eql(iso.countries['AF']);
    iso.findCountryByName('Albanie').should.eql(iso.countries['AL']);
    should.not.exist(iso.findCountryByName('Fake_Nation'));
  });

  it('should have a `findCountriesByRegion` function', function() {
    iso.findCountriesByRegion.should.be.a('function');
    iso.findCountriesByRegion('Asia').length.should.above(0);
  });

  it('should have a `getSimpleCountryList` function', function() {
    iso.getSimpleCountryList.should.be.a('function');
    iso.getSimpleCountryList().length.should.be.eql(246);
    iso.getSimpleCountryList().pop().should.be.eql({ value: 'AX', name: 'Åland Islands' });
  });

});

describe('ISO Currencies find methods', function() {

  it('should have a `findCurrency` function', function() {
    iso.findCurrency.should.be.a('function');
    iso.findCurrency('GBP').countries.length.should.eql(1);
    iso.findCurrency('USD').countries.length.should.eql(18);
  });

});
