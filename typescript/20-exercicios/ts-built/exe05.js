"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe05() {
    var ladoTrianguloA = Number(rs.question('Digite um lado do triângulo: '));
    var ladoTrianguloB = Number(rs.question('Digite um lado do triângulo: '));
    var ladoTrianguloC = Number(rs.question('Digite um lado do triângulo: '));
    if (ladoTrianguloA == ladoTrianguloB && ladoTrianguloB == ladoTrianguloC) {
        console.log('O seu triângulo é equilátero');
    }
    else {
        if (ladoTrianguloA == ladoTrianguloB || ladoTrianguloB == ladoTrianguloC) {
            console.log('O seu triângulo é isósceles');
        }
        else {
            console.log('O seu triângulo é escaleno');
        }
    }
}
exports.default = runExe05;
