'use strict'

var http = require('http');

// 创建http server ,并调用回调函数
var server = http.createServer(function (request, response) {
    // 回调函数接受request和response对象
    // 获取HTTP请求的method和url
    console.log(request.method + ":" + request.url);
    // 将HTTP响应200写入response,同时设置Context-Type:text/html
    response.writeHead(200, {"Content-Type":"text/html"});
    // 将HTTP响应的HTML内容写入response
    response.end("<h1>Hello Node</h1>")
});

server.listen(66666);
console.log('Server is running at http://127.0.0.1:8888/');