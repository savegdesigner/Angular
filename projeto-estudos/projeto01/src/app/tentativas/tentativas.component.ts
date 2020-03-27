import { Component, OnInit, OnChanges, Input } from '@angular/core';

import Coracao from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  public coracaoVazio : string = 'assets/img/heart-icon.png'
  public coracaoCheio : string = 'assets/img/heart-icon-full.png'

  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    
  }

  // LifeCycle Hook
  ngOnChanges(){
      if(this.tentativas !== this.coracoes.length){
        let indice = this.coracoes.length - this.tentativas
        this.coracoes[indice - 1].cheio = false

      }else{

      }

    console.log('Tentativas: ', this.tentativas)
  }

  // LifeCycle Hook
  ngOnInit(): void {
    
  }


}
