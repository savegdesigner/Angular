"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe04() {
    return calcularMedia();
}
function calcularMedia() {
    var nota1 = Number(rs.question('Sua primeira nota: '));
    var nota2 = Number(rs.question('Sua primeira nota: '));
    var nota3 = Number(rs.question('Sua primeira nota: '));
    return tiraMedia(nota1, nota2, nota3);
}
function tiraMedia(nota1, nota2, nota3) {
    var resultado = (nota1 + nota2 + nota3) / 3;
    return resultado;
}
exports.default = runExe04;
