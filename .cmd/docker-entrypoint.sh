#!/bin/sh

sleep 5s

yarn sequelize-cli db:migrate

sleep 1s

yarn sequelize-cli db:seed:undo

sleep 1s

yarn sequelize-cli db:seed:all

sleep 1s
