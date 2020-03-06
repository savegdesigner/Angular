import * as rs from 'readline-sync'

function runExe01(): void{

    let primeiro_numero: number = rs.question('Digite um número: ')

    if(primeiro_numero % 2 == 0){
        console.log('O número é par')

    }else{
        console.log('O número é impar')

    }

}

export default runExe01