import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.scss']
})
export class Exercicio06Component implements OnInit {

  paises: Array<string> = ['Brasil', 'Lituania', 'Canada', 'Japão']
  capitais: Array<string> = ['Brasilia', 'Vilnius', 'Ottawa', 'Tóquio']

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCapital(i : number){
    alert(this.capitais[i])
  }
}
