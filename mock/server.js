const path = require('path');
const fs = require('fs');
const router = require('./router.js');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(router);
const port = 9090;

server.use(jsonServer.bodyParser);
server.use(middlewares);
// 将 POST 请求转为 GET
server.use((request, res, next) => {
    request.method = 'GET';
    next();
});

server.use(rewriter);
const fileNames = fs.readdirSync(path.resolve(__dirname, './api'));
let files = {};
// 合并多个API文件
for (let i = 0; i < fileNames.length; i++) {
    const routePath = path.resolve(__dirname, './api/' + fileNames[i]);
    let file = require(routePath);
    files = Object.assign(files, file);
}
let routers = jsonServer.router(files);
server.use(routers);

server.listen(port, () => {
    console.log('mock Server is running in ', port);
});
