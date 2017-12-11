'use strict';

var _lib = require('./lib.mjs');

console.log(_lib.counter); // 3
(0, _lib.incCounter)();
console.log(_lib.counter); // 4