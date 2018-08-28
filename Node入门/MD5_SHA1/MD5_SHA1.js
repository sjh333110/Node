'use strict'
const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello,world');
hash.update('Hello,node.js');

console.log(hash.digest('hex'));