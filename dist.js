var colors = require('colors'),
    fs = require('fs'),
    _ = require('underscore'),
    program = require('commander'),
    request = require('request'),
    yaml = require('js-yaml');

program.version('0.0.3')
       .option('-i,--inputfile [file]', 'Input file (csv)')
       .option('-o,--outputfile [file]', 'Output file')
       .parse(process.argv);

var inputfile = program.inputfile;
var outputfile = program.outputfile;

if(!inputfile) inputfile = 'countries.yaml';
if(!outputfile) outputfile = 'dist/countries.js';

var currenciesByISO = {};
var countriesByISO = {};
var lines = [];

fs.readFile(inputfile, function(err, data) {

  var countries = yaml.load(data.toString());

  // populate objects
  _.each(countries, function(country, key) {

    var alpha2 = country.alpha2;
    if (alpha2) {
      var currency = country.currency;

      var obj = {
        value: country.alpha2,
        name: country.name,
        names: country.names,
        region: country.region,
        subregion: country.subregion,
        currency: country.currency,
        alpha2: country.alpha2,
        alpha3: country.alpha3,
        ioc: country.ioc,
        number: country.number,
        tel: country.country_code,
        latitude: country.latitude,
        longitude: country.longitude,
        un: country.un_locode
      };

      if(country.commonname) {
        obj.commonname = country.commonname;
      }

      countriesByISO[alpha2] = obj;

      if (!currenciesByISO[country.currency]) {
        currenciesByISO[country.currency] = {
          value:  country.currency,
          name: country.currency,
          countries: [obj.value]
        };
      } else {
        currenciesByISO[country.currency].countries.push(obj.value);
      }
    }
  });

  loadTemplate(function(err, template) {
    if(err || !template) {
      console.log('Failed to load template'.red);
      console.log(err);
    }
    template = template.replace('\'%%countries%%\'', JSON.stringify(countriesByISO, null, 2));
    template = template.replace('\'%%currencies%%\'', JSON.stringify(currenciesByISO, null, 2));
    
    fs.writeFile(outputfile, template, function(err) {
      if(err) console.log('Failed save'.red);
      console.log('Written %s'.green, outputfile);
    });
  });
});

function loadTemplate(callback) {
  fs.readFile(__dirname + '/' + 'countries.js.template', function(err, data) {
    if(err) return callback(err);
    callback(null, data.toString());
  });
}
