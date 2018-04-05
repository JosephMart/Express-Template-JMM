[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

# Express + Babel Template by [JosephMart](https://github.com/JosephMart)
<div align="left">

[![deps][deps]][deps-url]
[![CircleCI](https://circleci.com/gh/JosephMart/Express-Template-JMM.svg?style=svg)](https://circleci.com/gh/JosephMart/Express-Template-JMM)
</div>

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

[deps]: https://img.shields.io/david/JosephMart/Express-Template-JMM.svg
[deps-url]: https://david-dm.org/JosephMart/Express-Template-JMM