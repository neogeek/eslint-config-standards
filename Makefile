BIN=node_modules/.bin

test:
	make lint
	make update && git diff --exit-code || exit $?

lint:
	$(BIN)/eslint utils/

update:
	node utils/update.js
