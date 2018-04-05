[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)
# Express + Babel Template by [JosephMart](https://github.com/JosephMart)

## Commands
```bash
yarn start # run prod server
yarn babel-node # run babel
yarn dev # run dev server with nodemon
yarn clean # rm -rf dist
yarn build # build prod
```

## Error codes

Utilize [throw.js](https://github.com/kbariotis/throw.js) for error codes

## Deployment

Move `express-template.service` to `/etc/systemd/system`

See logs with journalctl -u express-template