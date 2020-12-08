$ npm install pm2 -g
$ pm2 stop all
$ pm2 delete all
$ pm2 start ./src/main.js --name coderhub
$ pm2 start ecosystem.config.js