var listaAtletas = [
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
];
function buscarAtletaAlto(listaAtletas) {
    var atletaAlto = { 'nome': '', 'altura': 0 };
    for (var counter = void 0; counter <= listaAtletas.length; counter++) {
        if (listaAtletas[counter].altura > atletaAlto.altura) {
            atletaAlto = listaAtletas[counter];
        }
        else { }
    }
    console.log("O atleta mais alto \u00E9 o " + atletaAlto);
}
buscarAtletaAlto(listaAtletas);
