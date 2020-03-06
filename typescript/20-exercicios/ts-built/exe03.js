"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularAnoBissexto(ano) {
    if (ano % 4 == 0 || ano % 400 == 0) {
        return 'Esse é um ano bissexto';
    }
    else {
        return 'Esse ano não é bissexto';
    }
}
exports.default = calcularAnoBissexto;
