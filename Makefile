BIN=node_modules/.bin

test:
	make lint

lint:
	$(BIN)/eslint utils/

update:
	node utils/update.js
