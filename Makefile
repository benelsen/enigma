
build: components index.js
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components

test:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--require should

.PHONY: clean test
