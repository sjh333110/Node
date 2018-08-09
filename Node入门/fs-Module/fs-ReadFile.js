'use strict' 
var fs = require('fs');


// 读取文件内容
function readFile (filePath) {
    fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
}

readFile('example.txt');

// 异步读取文件 不接受回调函数
var data = fs.readFileSync('example.txt','utf-8');
console.log(data);

module.exports = readFile;