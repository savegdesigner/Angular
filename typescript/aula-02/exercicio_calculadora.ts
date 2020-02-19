import * as rs from 'readline-sync'
import calcular from './calcular'

// Escreva um programa que leia o valor de 2 números inteiros e a operação desejada. Mostre o resultado da operação.
let num1 = Number(rs.question('Digite um número: '))
let num2 = Number(rs.question('Digite um número: '))
let operation: string = rs.question('Digite a operação: ')

console.log('O resultado é: ', calcular(num1, num2, operation))