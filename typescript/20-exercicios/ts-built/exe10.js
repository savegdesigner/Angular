"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe10() {
    var palavra;
    do {
        palavra = rs.question("Digite uma palavra que contem F ou que comece com P: ");
        palavra = palavra.toLowerCase();
    } while (palavra.indexOf('f') == -1 && palavra.indexOf('p') != 0);
}
exports.default = runExe10;
