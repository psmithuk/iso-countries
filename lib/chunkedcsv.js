var EventEmitter = require('events').EventEmitter,
  fs = require('fs'),
  util = require('util');

module.exports = function() {

  var ChunkedCSV = function() {
      this.options = {
        linecount: 5000,
        columns: null,
        delimiter: ',',
        quote: '"'
      };
      this.readOptions = {
        encoding: 'utf8',
        bufferSize: 64 * 1024 * 1024
      };
      this.lines = [];
      this.chars = '';
      this.linecount = 0;
      this.finished = false;
    };
  ChunkedCSV.prototype.__proto__ = EventEmitter.prototype;

  ChunkedCSV.prototype.fromStream = function(readStream) {
    var self = this;

    readStream.on('data', function(data) {
      try {
        readStream.pause();
        self.parse(data);
      } catch (e) {
        util.debug(e);
        self.emit('error', e);
        this.destroy();
      }
    });

    readStream.on('error', function(error) {
      util.debug('readstream error: ' + error);
      self.emit('error', error);
    });
    readStream.on('end', function() {
      self.end();
    });

    self.readStream = readStream;
    return this;
  };

  ChunkedCSV.prototype.fromPath = function(path, options) {
    var stream = fs.createReadStream(path, this.readOptions);
    return this.fromStream(stream, null);
  };

  ChunkedCSV.prototype.end = function() {
    var self = this;
    self.finished = true;

    util.debug('end');
    if (self.chars.length > 0) {
      self.lines = self.lines.concat(this.chars);
      self.chars = '';
    }

    if (self.lines.length > 0) {
      self.processlines();
    } else {
      self.complete();
    }
  };

  ChunkedCSV.prototype.resume = function() {
    var self = this;
    if (self.finished) {
      self.complete();
    } else {
      this.readStream.resume();
    }
  };

  ChunkedCSV.prototype.complete = function(error) {
    if (error) {
      //util.debug('ChunkedCSV.complete ' + error);
    }
    this.emit('finished', this.linecount);
  };

  ChunkedCSV.prototype.parse = function(data) {
    var self = this;

    // util.debug('Parsing ' + data.length + ' chars');
    // util.debug(' there are ' + self.lines.length + ' lines in the queue');
    // util.debug(' there are ' + self.chars.length + ' chars in the spare buffer');
    // any leftover characters from previous chunks
    data = self.chars + data;
    self.chars = '';
    var newlines = [];
    var line = '';
    for (var i = 0; i < data.length; i++) {
      var c = data.charAt(i);
      if (c == '\n') {
        if (line != '') {
          newlines.push(line);
          line = '';
        }
      } else {
        line = line + c;
      }
    }
    if (line != '') {
      self.chars = line;
    }

    self.lines = self.lines.concat(newlines);

    self.processlines()
  };

  ChunkedCSV.prototype.processlines = function() {
    var self = this;
    var linestoprocess = [];

    if (self.lines.length >= self.options.linecount) {
      linestoprocess = self.lines.splice(0, self.options.linecount);
    } else if (self.finished) {
      linestoprocess = self.lines.splice(0, self.lines.length);
    }

    if (linestoprocess.length > 0) {
      // util.debug(' Processing ' + linestoprocess.length + ' lines');
      self.linecount += linestoprocess.length;
      self.emit('data', linestoprocess);
      self.once('complete', function() {
        // util.debug('batch complete');
        self.processlines();
      });

    } else {
      //      util.debug('Resuming');
      self.resume();
    }
  };

  ChunkedCSV.prototype.objectFromLine = function(line, columns) {
    var quoted = false;
    var fields = [];
    var field = '';
    var obj = {};

    for (var i = 0; i < line.length; i++) {
      var c = line.charAt(i);
      switch (c) {
      case (this.options.delimiter):
        if (!quoted) {
          fields.push(field);
          field = '';
        } else {
          field = field + c;
        }
        break;
      case (this.options.quote):
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
  };

  var chunkedcsv = new ChunkedCSV();
  return chunkedcsv;
};