import * as rs from 'readline-sync'

let num1, num2

do{

    num1 = Number(rs.question('Digite um número: '))
    num2 = Number(rs.question('Digite um SEGUNDO número: '))

}while(isNaN(num1) || isNaN(num2))

console.log(`A soma dos números é: `, (num1 + num2))