import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public texto;

  constructor() { }

  enviar():void{

    if(this.texto === undefined || this.texto === ''){
      alert('Não deixe o input vazio.')

    }else{
      alert('Valeu!!')

    }

  }

  ngOnInit(): void {
  }

}
