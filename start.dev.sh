#!/bin/sh
cd `pwd -P`
docker-compose -p broadsayApp -f "./docker-compose.dev.yml" up -d --build 