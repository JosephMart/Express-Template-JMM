#!/bin/bash -x

cd /home/ubuntu/express-api
git pull
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v9.7.1/bin
/home/ubuntu/.nvm/versions/node/v9.7.1/bin/npm run build
sudo systemctl restart express-template