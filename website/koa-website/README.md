# Website

[node-v14.15.1 下载](https://nodejs.org/dist/v14.15.1/node-v14.15.1.pkg)

```shell
mkdir website && npm init -y
```

```shell
$ tree
.
├── README.md
├── package.json
└── src
    ├── app
    ├── constants
    ├── controller
    ├── main.js
    ├── middleware
    ├── router
    ├── service
    └── utils

8 directories, 3 files
```

```shell
$ npm i koa koa-router
```

```shell
$ npm i nodemon --dev
```

```shell
$ vi package.json

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon ./src/main.js"
},
```

```shell
$ npm start
```