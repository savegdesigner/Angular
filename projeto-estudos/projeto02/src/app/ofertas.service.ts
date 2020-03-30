import listaOfertas from './utils/ofertas'
import Oferta from './shared/oferta.model'

export class OfertasService {

    public ofertas: Array<Oferta> = listaOfertas

    public getOfertas(): Array<Oferta> {

        return this.ofertas

    }

}