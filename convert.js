/**
 * Module dependencies.
 */

var util = require('util'),
  colors = require('colors'),
  fs = require('fs'),
  events = require('events'),
  _ = require('underscore'),
  async = require('async'),
  program = require('commander'),
  request = require('request');

program.version('0.0.1').option('-i,--inputfile [file]', 'Input file (csv)').option('-o,--outputfile [file]', 'Output file').parse(process.argv);

var inputfile = program.inputfile;
var outputfile = program.outputfile;

if(!inputfile) inputfile = 'isocountry_detailed.txt';
if(!outputfile) outputfile = 'countries.js';

var headers = [
  'Sort Order',
  'Common Name',
  'Formal Name',
  'Type',
  'Sub Type',
  'Sovereignty',
  'Capital',
  'ISO 4217 Currency Code',
  'ISO 4217 Currency Name',
  'ITU-T Telephone Code',
  'ISO 3166-1 2 Letter Code',
  'ISO 3166-1 3 Letter Code',
  'ISO 3166-1 Number',
  'IANA Country Code TLD'
];

var currenciesByISO = {};
var countriesByISO = {};
var lines = [];

fs.readFile(__dirname + '/' + 'isocountry_detailed.txt', function(err, data) {

  var arr = [];

  // all lines expect the first
  lines = _.rest(data.toString().split('\n'));
  _.each(lines, function(line) {
    arr.push(lineToObj(line, headers));
  });

  // populate objects
  _.each(arr, function(country) {
    var iso3166 = country['ISO 3166-1 2 Letter Code'];
    if (iso3166) {
      var currencies = country['ISO 4217 Currency Code'].split(' and ');
      var tlds = country['IANA Country Code TLD'].split(' and ');

      var obj = {
        country: iso3166,
        name: country['Common Name'],
        formalname: country['Formal Name'],
        type: country['Type'],
        subtype: country['Sub Type'],
        sovereignty: country['Sovereignty'],
        capital: country['Capital'],
        currency: currencies[0],
        tel: country['ITU-T Telephone Code'],
        'iso3116-1': country['ISO 3166-1 Number'],
        'iso3116-1-2': iso3166,
        'iso3116-1-3': country['ISO 3166-1 3 Letter Code'],
        'tld': tlds[0],
        'sort': country['Sort Order']
      };

      if(tlds[1]) obj.tldsecondary = tlds[1];
      if(currencies[1]) obj.currencysecondary = currencies[1];

      countriesByISO[iso3166] = obj;

      if (currencies && currencies.length) {
        _.each(currencies, function(c, i) {
          if (c) {
            if (!currenciesByISO[c]) {
              currenciesByISO[c] = {
                currency: c,
                name: country['ISO 4217 Currency Name'].split(' and ')[i],
                countries: [obj.country]
              };
            } else {
              currenciesByISO[c].countries.push(obj.country);
            }
          }
        });
      }
    }
  });

  // console.log(JSON.stringify(currenciesByISO, null, 2));
  // console.log(JSON.stringify(countriesByISO, null, 2));

  // console.log(_.filter(countriesByISO, function(c) {
  //   return c.tel.indexOf('and') > -1;
  //   // return c.tldsecondary || c.currencysecondary;
  // }));

  loadTemplate(function(err, template) {
    if(err || !template) {
      console.log('Failed to load template'.red);
      console.log(err);
    }
    template = template.replace('%%countries%%', JSON.stringify(countriesByISO, null, 2));
    template = template.replace('%%currencies%%', JSON.stringify(currenciesByISO, null, 2));
    
    // console.log(outputfile);
  
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

function lineToObj(line, columns) {

  var quoted = false;
  var fields = [];
  var field = '';
  var obj = {};

  for (var i = 0; i < line.length; i++) {
    var c = line.charAt(i);
    switch (c) {
    case (','):
      if (!quoted) {
        fields.push(field);
        field = '';
      } else {
        field = field + c;
      }
      break;
    case ('\"'):
      if (!quoted && field.length === 0) {
        quoted = true;
      } else {
        quoted = false;
      }
      break;
    default:
      field = field + c;
      break;
    }
  }
  fields.push(field);

  if (columns !== undefined) {
    for (var j = 0; j < columns.length; j++) {
      obj[columns[j]] = fields[j];
    }
    return obj;
  }

  return fields;
}