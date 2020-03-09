"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe08() {
    var numerosParaSomar = [];
    for (var counter = 1; counter <= 10; counter++) {
        var numeroRequisitado = Number(rs.question('Insira um número: '));
        numerosParaSomar.push(numeroRequisitado);
    }
    var numerosSomados = numerosParaSomar.reduce(function (contador, numeroAtual) {
        return contador + numeroAtual;
    });
    console.log("A soma dos n\u00FAmeros \u00E9: " + numerosSomados);
}
exports.default = runExe08;
