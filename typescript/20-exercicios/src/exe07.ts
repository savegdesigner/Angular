import * as rs from 'readline-sync'

function runExe07(){

    let perguntaTabuada = Number(rs.question('Insira a tabuada desejada: '))

    for(let counter: number = 1; counter <= 10; counter++){
        console.log(`${perguntaTabuada} X ${counter} = ${(perguntaTabuada * counter)}`)

    }

}

export default runExe07