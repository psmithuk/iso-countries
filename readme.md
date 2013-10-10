# ISO Country Codes

### a little javascript helper

This library is a javascript version of the dataset originally published by [Andrew Patton](http://www.andrewpatton.com/countrylist.html). This dataset merges information from ISO, United Nations and the CIA World Factbook.

By converting the dataset to javascript objects you can access commonly required information (name, currency etc) just using the two letter [ISO 3166-1 alpha-2](http://wikipedia.org/wiki/ISO_3166-1_alpha-2) code. Additional methods are available to search for countries by current, name, international telephone dialling prefix, top-level internet domain etc.

It works in both [Node.js](http://nodejs.org) and the web browser.


## Installation


For use in Node.js:

    npm install iso-countries

In the browser just copy the file from `dist\countries.min.js` (skinny) or `dist\countries.js` (full-fat).

## Building

To create distributable files:

    npm install
    make dist

To run the tests (requires `mocha` and `should`):

    make test

To run everything

    make all


## Usage

_TODO_ - add once finder methods are complete

See tests for now. Sorry.

## License

MIT

## Changes to the data

I've included a copy of the source data file `isocountry_detailed.txt`. If you believe updates are required pleases let me know. If you disagree with the United Nations or ISO on the status or name of a country then you should probably fork your own version (or this repo, not the country).

## Notes

This library uses the reserved ISO 3166-1 alpha-2 code 'XX' to represent Worldwide. This might not be for everyone but it was consistent with my personal use cases. I'll probably add a build option to exclude this.

## Future

* Likely to split the browser version into two (regular and light) so that more fields such as population and local names can be included.

* Provide CSS files for flags



