TESTS = test/*.js
REPORTER = spec

CWD := $(shell pwd)
UGLIFY = $(CWD)/node_modules/uglify-js/bin/uglifyjs

all: dist test

dist:	
	node dist.js \
		--inputfile isocountry_detailed.txt \
		--outputfile dist/countries.js
	$(UGLIFY) dist/countries.js > dist/countries.min.js

test:
	@NODE_ENV=test mocha \
		--require should \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: dist test