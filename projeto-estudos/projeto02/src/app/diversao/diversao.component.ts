import { Component, OnInit } from '@angular/core'
import Oferta from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta>
  private ofertasService: OfertasService

  constructor(ofertasService: OfertasService) { 
    this.ofertasService = ofertasService
  }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas
        console.log(ofertas)
      })
      .catch((param: any) => {
        // console.log(param.codigo, param.mensagem)
        console.log('Deu erro...')
      })
  }

}
