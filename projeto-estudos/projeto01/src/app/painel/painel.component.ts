import { Component, OnInit } from '@angular/core';

import Frase from '../shared/frase.model'
import frases from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = frases
  public instrucao: string = 'Traduza a frase: '
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() {
      this.rodadaFrase = this.frases[this.rodada]
    }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {

    this.resposta = (<HTMLInputElement>resposta.target).value

  }

  public verificarResposta(): void{

    if(this.resposta == this.rodadaFrase.frasePtBr){

          // Trocar pergunta da rodada
    this.rodada++
    this.rodadaFrase =  this.frases[this.rodada]
    this.progresso =+ (100 / this.frases.length)

    }else{
      

    }


  }
}