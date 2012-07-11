TESTS = test/*.js
REPORTER = spec

CWD := $(shell pwd)
UGLIFY = $(CWD)/node_modules/uglify-js/bin/uglifyjs

test:
	@NODE_ENV=test mocha \
		--require should \
		--reporter $(REPORTER) \
		--timeout 5000 \
		--growl \
		test/index.js

.PHONY: build
build:

	node convert.js \
		--inputfile isocountry_detailed.txt \
		--outputfile countries.js

	$(UGLIFY) countries.js > countries.min.js

.PHONY: test