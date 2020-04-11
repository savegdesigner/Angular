import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.scss']
})
export class Exercicio05Component implements OnInit {

  pokemonImg: Array<string> = ['pokemon1.jpg', 'pokemon2.jpg', 'pokemon3.jpg']

  constructor() { }

  ngOnInit(): void {
  }

  mostrarNome(nome: string){

    alert(nome)

  }

}
