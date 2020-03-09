"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe07() {
    var perguntaTabuada = Number(rs.question('Insira a tabuada desejada: '));
    for (var counter = 1; counter <= 10; counter++) {
        console.log(perguntaTabuada + " X " + counter + " = " + (perguntaTabuada * counter));
    }
}
exports.default = runExe07;
