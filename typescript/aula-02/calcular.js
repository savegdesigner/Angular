"use strict";
exports.__esModule = true;
function calcular(num1, num2, operation) {
    switch (operation) {
        case '/':
            return num1 / num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        default:
            return 0;
            break;
    }
}
exports["default"] = calcular;
