"use strict";
let http = require('http');
let fs = require('fs');

//createReadStream inherits from EventEmitter
let myReadStream = fs.createReadStream(__dirname + '/data.txt'); //listen to data
let myWriteStream = fs.createWriteStream(__dirname + '/newPipeFile.txt'); //send it directly here

myReadStream.pipe(myWriteStream);

