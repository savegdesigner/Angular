"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var findNumber_1 = require("./findNumber");
var num1 = Number(rs.question('Digite um número: '));
console.log(findNumber_1["default"](num1));
