"use strict";
let http = require('http');
let fs = require('fs');

//createReadStream inherits from EventEmitter
let myReadStream = fs.createReadStream(__dirname + '/data.txt');

myReadStream.on('data', (chunk) => {
   console.log("New Chunk received: ") ;
   console.log(chunk);
});

//How is this different from fs.readFile()?
let myReadStreamEncoded = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
myReadStreamEncoded.on('data', (chunk) => {
   console.log("New UTF-8 Chunk received: ") ;
   console.log(chunk);
});