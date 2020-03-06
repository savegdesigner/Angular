"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe01() {
    var primeiro_numero = rs.question('Digite um número: ');
    if (primeiro_numero % 2 == 0) {
        console.log('O número é par');
    }
    else {
        console.log('O número é impar');
    }
}
exports.default = runExe01;
