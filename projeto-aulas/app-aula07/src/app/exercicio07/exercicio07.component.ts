import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.scss']
})
export class Exercicio07Component implements OnInit {

  posts: Array<object> = [{
    titulo: "post 1",
    conteudo: "conteudo do post 1"
  },
  {
    titulo: "post 2",
    conteudo: "conteudo do post 2"
  },
  {
    titulo: "post 3",
    conteudo: "conteudo do post 3"
  },

]

  constructor() { }

  ngOnInit(): void {
  }

}
