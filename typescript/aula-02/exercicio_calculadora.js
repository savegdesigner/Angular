"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var calcular_1 = require("./calcular");
// Escreva um programa que leia o valor de 2 números inteiros e a operação desejada. Mostre o resultado da operação.
var num1 = Number(rs.question('Digite um número: '));
var num2 = Number(rs.question('Digite um número: '));
var operation = rs.question('Digite a operação: ');
console.log('O resultado é: ', calcular_1["default"](num1, num2, operation));
