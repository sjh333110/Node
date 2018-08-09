'use strict'

var fs = require('fs');
var readFile = require('./fs-ReadFile');

function writeFile (filePath, data) {
    fs.writeFile(filePath, data, 'utf-8', function (err,data) {
        if (err) {
            console.log(err);
        } else {
            console.log('OK');
            readFile(filePath);
        }
    })
}

writeFile('writeFile.txt','hahahhahahha');