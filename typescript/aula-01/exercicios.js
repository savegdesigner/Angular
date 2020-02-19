"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
//  1 - ) Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números
// let n1: number = rs.question('Digite um número: ')
// let n2: number = rs.question('Digite um número: ')
// let n3: number = rs.question('Digite um número: ')
// let result: number = n1 * n2 * n3
// console.log(result)
// 2 - )Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente
// let nota1: number = rs.question('Digite sua nota 1: ')
// let nota2: number = rs.question('Digite sua nota 2: ')
// let nota3: number = rs.question('Digite sua nota 3: ')
// let nota_final = (nota1 / 2) + (nota2 / 3) + (nota3 / 5)
// let nota_super_final = nota_final / 10
// console.log(`Sua nota final é: ${nota_super_final}`)
// 3 - ) Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida, escrever a sua área
// let baseTriangulo: number = rs.question('Digite a base do seu triangulo: ')
// let alturaTriangulo: number = rs.question('Digite a altura do seu triangulo: ')
// let areaTriangulo: number = (baseTriangulo * alturaTriangulo) / 2
// console.log(`A área do seu triangulo é: ${areaTriangulo}`)
// 4 - ) Elabore um programa que permita ao usuário informar determinada temperatura em graus Celsius e converta e exiba seus respectivos valores em graus Kelvin e Fahrenheit
var tempCelsius = rs.question('Digite a temperatura em Celsius: ');
var tempKelvin = tempCelsius + 273;
var tempFah = ((tempCelsius / 5) * 9) + 32;
console.log("Kelvin: " + tempKelvin + ", Fahrenheit: " + tempFah);
// 5 - ) Uma pessoa com pouco tempo disponível joga uma partida de CS de 30 minutos a cada dia, 3 dias por semana. Monte a fórmula e escreva um programa que calcule e exibe na tela quanto tempo, em horas, a pessoa terá dedicado ao jogo ao final de um ano
