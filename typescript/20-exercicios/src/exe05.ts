import * as rs from 'readline-sync'

function runExe05(): void{
    let ladoTrianguloA = Number(rs.question('Digite um lado do triângulo: '))
    let ladoTrianguloB = Number(rs.question('Digite um lado do triângulo: '))
    let ladoTrianguloC = Number(rs.question('Digite um lado do triângulo: '))

    if(ladoTrianguloA == ladoTrianguloB && ladoTrianguloB == ladoTrianguloC){
        console.log('O seu triângulo é equilátero')
    
    }else{
        if(ladoTrianguloA == ladoTrianguloB || ladoTrianguloB == ladoTrianguloC ){
            console.log('O seu triângulo é isósceles')
    
        }else{
            console.log('O seu triângulo é escaleno')
        }
    }

}

export default runExe05