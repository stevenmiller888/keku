#
# Environment.
#

NODE := node --harmony

#
# Binaries.
#

BIN := ./node_modules/.bin
MOCHA := $(BIN)/mocha
DUO := $(BIN)/duo

DUO_FLAGS := --quiet --copy --use ./server/duo/plugins.js

#
# Wildcards.
#

CSS := $(shell find client/index.css)
JS := $(shell find client/index.js)

#
# Default.
#

default: build

#
# Build.
#

build: $(addprefix build/, $(JS) $(CSS)) | node_modules

#
# Target for `build/*.js` files.
#

build/%.js: %.js
	@$(DUO) $(DUO_FLAGS) $<

#
# Target for `build/*.css` files.
#

build/%.css: %.css
	@$(DUO) $(DUO_FLAGS) $<

#
# Server.
#

server:
	@$(NODE) ./server

#
# Clean.
#

clean: client-client

#
# Clean client.
#

clean-client:
	@rm -rf build components
	@$(DUO) clean-cache --quiet

#
# Clean server.
#

client-server:
	@rm -rf node_modules
	@npm cache clean

#
# Tests.
#

test: node_modules
	@$(BIN)/mocha test --reporter spec

test-style:
	$(BIN)/jscs lib test

#
# Target for `node_modules` folder.
#

node_modules: package.json
	@npm install
	
#
# Phonies.
#

.PHONY: build test test-style clean distclean
