
function runExe03(ano): String{

    return calcularAnoBissexto(ano)

}

function calcularAnoBissexto(ano: number): String{

    if(ano % 4 == 0 || ano % 400 == 0){
        return 'Esse é um ano bissexto'

    }else{
        return 'Esse ano não é bissexto'
    }

}

export default runExe03