
build: components index.js
	@component build --dev

components:
	@component install --dev

clean:
	rm -rf build

cleanall: clean
	rm -rf components node_modules

test:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--require should

.PHONY: clean test
