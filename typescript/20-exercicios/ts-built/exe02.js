"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rs = require("readline-sync");
function runExe02() {
    var pergunta = String(rs.question('Qual o nome oficial da linguagem Javascript ? a) Typescript b) Reactscript c) Ecmascript d) Java '));
    switch (pergunta) {
        case 'a': {
            console.log('Erou');
            break;
        }
        case 'b': {
            console.log('Nem a pau...');
            break;
        }
        case 'c': {
            console.log('Parabens por saber o mínimo...');
            break;
        }
        case 'd': {
            console.log('Ai ta na disney');
            break;
        }
        default: {
            console.log('Não foi dessa vez meu chapa.');
        }
    }
}
exports.default = runExe02;
