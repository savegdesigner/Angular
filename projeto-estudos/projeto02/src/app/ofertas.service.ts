import listaOfertas from './utils/ofertas'
import Oferta from './shared/oferta.model'

export class OfertasService {

    public ofertas: Array<Oferta> = listaOfertas

    public getOfertas(): Array<Oferta> {

        return this.ofertas

    }

    public getOfertas2(): Promise<Array<Oferta>> {


        return new Promise((resolve, reject) => {

            // processamento --> chama ressolve ou reject

            let passou = true     
            if(passou){
                setTimeout(() => resolve(this.ofertas), 2000) 

            }else{
                reject({codigo: 404, mensagem: 'NOT FOUND ERROR'})

            }


        }) 
            .then((ofertas: Oferta[]) => {
                console.log('Primeiro then')
                return ofertas
            })
                .then((ofertas) => {
                    console.log('Segundo then')
                    return new Promise((resolve2, reject2) => {
                        setTimeout(() => {resolve2(ofertas)},2000)
                    })
                })
                    .then((ofertas: Oferta[]) => {
                        console.log('Terceiro then')
                        return ofertas
                    })
    }

}