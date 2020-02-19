import * as rs from 'readline-sync'
import test from './test-function'

const nome: string = rs.question('Entre com seu nome: ')
console.log(`olá ${nome}`)

function teste(texto : string) : void{

    let num: number = 10
    console.log(texto)

}

const message: string = 'Olá mundo!'
console.log(test(message))

const name: string = 'Vinicas'
console.log(teste(name))