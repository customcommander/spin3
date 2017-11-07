install:
	docker run --rm --mount type=bind,src=$(realpath .),dst=/var/spin -w /var/spin \
		node:8-alpine sh -c "yarn config set workspaces-experimental true && yarn"

start:
	-docker-compose up $(if $(TRAVIS),-d,--abort-on-container-exit --no-recreate)

stop:
	docker-compose down

test:
	docker exec spin-node ./node_modules/.bin/cucumberjs packages/spin-uat/test