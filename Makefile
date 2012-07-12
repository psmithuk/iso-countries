TESTS = test/*.js
REPORTER = spec

CWD := $(shell pwd)
UGLIFY = $(CWD)/node_modules/uglify-js/bin/uglifyjs


.PHONY: test
test:
	@NODE_ENV=test mocha \
		--require should \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: dist
dist:
	node dist.js \
		--inputfile isocountry_detailed.txt \
		--outputfile dist/countries.js

	$(UGLIFY) dist/countries.js > dist/countries.min.js

all: dist test
.PHONY: all