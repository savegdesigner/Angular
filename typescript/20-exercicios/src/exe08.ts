import * as rs from 'readline-sync'

function runExe08(){

    let numerosParaSomar: Array<number> = []

    for(let counter: number = 1; counter <= 10; counter++){
        let numeroRequisitado = Number(rs.question('Insira um número: '))
        numerosParaSomar.push(numeroRequisitado)

    }

    let numerosSomados = numerosParaSomar.reduce((contador: number, numeroAtual: number) => {
        return contador + numeroAtual
    })

    console.log(`A soma dos números é: ${numerosSomados}`)

}

export default runExe08