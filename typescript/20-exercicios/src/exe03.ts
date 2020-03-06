
function calcularAnoBissexto(ano: number): string{

    if(ano % 4 == 0 || ano % 400 == 0){
        return 'Esse é um ano bissexto'

    }else{
        return 'Esse ano não é bissexto'
    }

}

export default calcularAnoBissexto