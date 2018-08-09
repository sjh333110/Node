'use strict'
var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行获取当前root目录，默认当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir:' + root);

// 创建服务器
var server = http.createServer(function (request, response) {
    // 获取URL的path,类似 ‘css/bootstrap.css’
    var pathName = url.parse(request.url).pathname;
    console.log(pathName);
    // 获取对应的本地文件路径 类似‘/srv/www/css/bootstrap.css’
    var filePath = path.join(root,pathName);
    console.log(filePath)
    // 获取文件状态
    fs.stat(filePath, function(err, stat) {
        if(!err && stat.isFile()) {
            // 没有出错并且文件存在
            console.log('200' + request.url);
            // 发送200响应
            response.writeHead(200);
            // 文件流导向response
            fs.createReadStream(filePath).pipe(response);
        } else {
            // 出错了或者文件不存在
            console.log('404' + request.url);
            // 发送404响应
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
})

server.listen(8888);
console.log('Server is running at http://127.0.0.1:8888');