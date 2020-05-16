import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss']
})
export class Exercicio01Component implements OnInit {

  public num1: number = 0
  public num2: number = 0

  public marca1: string = 'Pitbull'
  public marca2: string = 'Dachshund'
  public marca3: string = 'Akita'

  public marca: string
  public marcaUrl: string

  public show: string = 'show'

  constructor() { }

  ngOnInit(): void {
  }

  public buscarMarca(){

    switch(this.marca){
      case 'Pitbull':
        this.marcaUrl = '../assets/images/cao2.jpg'
        this.show = ''
        break;
      case 'Dachshund':
        this.marcaUrl = '../assets/images/cao1.jpg'
        this.show = ''
        break;
      case 'Akita':
        this.marcaUrl = '../assets/images/cao3.jpg'
        this.show = ''
        break;
      default:
        this.marcaUrl = ''
        this.show = 'show'
        break;
    }
  }

}
