import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import Frase from '../shared/frase.model'
import frases from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = frases
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizarRodada()
    }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {

    this.resposta = (<HTMLInputElement>resposta.target).value

  }

  ngOnDestroy(): void {
    console.log('O painel foi destruído!')
  }

  public verificarResposta(): void{

    if(this.resposta == this.rodadaFrase.frasePtBr){

    // Trocar pergunta da rodada
    this.rodada++

    // atualiza progresso
    this.progresso = this.progresso + (100 / this.frases.length) 

    // 
    if(this.rodada == 4){
      this.encerrarJogo.emit('vitoria')
    }

    // atualiza o objeto rodadaFrase
    this.atualizarRodada()

    }else{
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
        
      }
    }

  }

  public atualizarRodada(){
    // Trocar frase da rodada
    this.rodadaFrase = this.frases[this.rodada]

    // Limpar a resposta
    this.resposta = ''
  }

}