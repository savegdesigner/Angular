"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num1, num2;
do {
    num1 = Number(rs.question('Digite um número: '));
    num2 = Number(rs.question('Digite um SEGUNDO número: '));
} while (isNaN(num1) || isNaN(num2));
console.log("A soma dos n\u00FAmeros \u00E9: ", (num1 + num2));
