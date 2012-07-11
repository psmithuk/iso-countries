# Test Notes and Examples

## Curl Badness

Ignore the output body, just look at the headers.

	curl -H "apikey:9c6fcc17c9d9282f4f2029e9a26e4e1c" --verbose 'http://127.0.0.1:8080/artistportal/search/resources?q=fool+in+love' > /dev/null

Put an API key in the header

	curl -H "apikey:9c6fcc17c9d9282f4f2029e9a26e4e1c" --verbose 'http://127.0.0.1:8080/artistportal/search/resources?q=fool+in+love' > /dev/null

Ask the proxy to compress the results

	curl -H "apikey:9c6fcc17c9d9282f4f2029e9a26e4e1c" -H "Accept-Encoding:deflate,gzip" --verbose 'http://127.0.0.1:8080/artistportal/search/resources?q=fool+in+love' > /dev/null

## IndexChecker Tests

	curl -H "Accept-Encoding:deflate,gzip"  --verbose 'http://127.0.0.1:8081/indexchecker/home/itunes/album/overall?apikey=9c6fcc17c9d9282f4f2029e9a26e4e1c&dada' > /dev/null

