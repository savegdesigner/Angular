"use strict";
exports.__esModule = true;
function findNumber(num) {
    if (num < 0) {
        return 'O seu número é negativo';
    }
    else {
        if (num > 0) {
            return 'O seu número é positivo';
        }
        else {
            return 'O seu número é zero';
        }
    }
}
exports["default"] = findNumber;
