
#
# Binaries.
#

BIN := ./node_modules/.bin
DUO := $(BIN)/duo --root client

#
# Build.
#

build: node_modules
	@$(DUO) index.js --stdout --use duo-babel > build.js
	@$(DUO) index.css --stdout --use duo-myth > build.css

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

client-server:
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
