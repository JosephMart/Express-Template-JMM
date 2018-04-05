#!/bin/bash -x

cd /home/ubuntu/express-api
git pull
which node
yarn build
sudo systemctl restart express-template