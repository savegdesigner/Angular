import * as rs from 'readline-sync'
import findNumber from './findNumber'

let num1 = Number(rs.question('Digite um número: '))
console.log(findNumber(num1))