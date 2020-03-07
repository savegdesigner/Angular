import * as rs from 'readline-sync'

function runExe04(): Number{

    return calcularMedia()

}

function calcularMedia(): Number{

    let nota1 = Number(rs.question('Sua primeira nota: '))
    let nota2 = Number(rs.question('Sua primeira nota: '))
    let nota3 = Number(rs.question('Sua primeira nota: '))

    return tiraMedia(nota1, nota2, nota3)

}

function tiraMedia(nota1, nota2, nota3): Number{

    let resultado: Number = (nota1 + nota2 + nota3) / 3

    return resultado

}

export default runExe04