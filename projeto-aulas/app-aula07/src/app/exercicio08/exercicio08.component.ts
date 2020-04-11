import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio08',
  templateUrl: './exercicio08.component.html',
  styleUrls: ['./exercicio08.component.scss']
})
export class Exercicio08Component implements OnInit {

  nome: string = ''
  lista: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  adicionarNaLista(): void{
    this.lista.push(this.nome)
  }

}
