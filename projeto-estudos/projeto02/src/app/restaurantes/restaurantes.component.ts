import { Component, OnInit } from '@angular/core';
import Oferta from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) =>{
        console.log(ofertas)
        this.ofertas = ofertas

      })
  }

}
