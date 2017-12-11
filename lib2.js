"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incCounter = incCounter;
var counter = exports.counter = 3;
function incCounter() {
  exports.counter = counter += 1;
}