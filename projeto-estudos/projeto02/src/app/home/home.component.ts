import { Component, OnInit } from '@angular/core';
import { OfertasService} from '../ofertas.service'
import Oferta from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})

export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)

    this.ofertasService.getOfertas()
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas
        console.log('Executado')

      })
      .catch((param: any) => {
        // console.log(param.codigo, param.mensagem)
        console.log('Deu erro...')
      })

  }

}
