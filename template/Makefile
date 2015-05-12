
#
# Binaries.
#

BIN := ./node_modules/.bin
BROWSERIFY := $(BIN)/browserify
DUO := $(BIN)/duo

#
# Build.
#

build: node_modules
	@$(BROWSERIFY) -t babelify client/index.js > build.js
	@$(DUO) client/index.css --stdout --quiet --use duo-myth > build.css

#
# Server.
#

server:
	@node --harmony ./server

#
# Clean.
#

clean: clean-client

#
# Clean client.
#

clean-client:
	@rm -rf build build.js build.css components

#
# Clean server.
#

clean-server:
	@rm -rf node_modules
	@npm cache clean

#
# Target for `node_modules` folder.
#

node_modules: package.json
	@npm install
	
#
# Phonies.
#

.PHONY: build clean clean-client client-server server
