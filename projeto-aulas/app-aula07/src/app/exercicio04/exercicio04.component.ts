import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.scss']
})
export class Exercicio04Component implements OnInit {

  numero1: number
  numero2: number
  resultado: number

  constructor() { }

  ngOnInit(): void {
  }

  public calcular(operacao: string): void{
    switch(operacao){
      case '+':
        this.resultado = this.numero1 + this.numero2
        break;

      case '-':
        this.resultado = this.numero1 - this.numero2
        break

      case '*':
        this.resultado = this.numero1 * this.numero2
        break

      case '/':
        this.resultado = this.numero1 / this.numero2
        break

      default:
        this.resultado = 0
    }

  }

}
