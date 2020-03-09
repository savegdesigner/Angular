const listaAtletas: Array<object> = [
    {
        'nome': 'Vinicius',
         'altura': 1.91
    },
    {
        'nome': 'Pedro',
         'altura': 1.75
    },
    {
        'nome': 'Victoria',
        'altura': 1.80
    },
    {
        'nome': 'Alice',
        'altura': 1.77
    },
    {
        'nome': 'Giannis',
        'altura': 2.11
    }
]

function buscarAtletaAlto(listaAtletas: Array<any>): void{

    let atletaAlto: any = {'nome': '', 'altura': 0}

    for(let counter: number; counter <= listaAtletas.length; counter++){
        if(listaAtletas[counter].altura > atletaAlto.altura){

            atletaAlto = listaAtletas[counter]

        }else{}

    }

    console.log(`O atleta mais alto é o ${atletaAlto}`)


}

buscarAtletaAlto(listaAtletas)