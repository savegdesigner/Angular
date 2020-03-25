import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

    public coracaoCheio : string = 'assets/img/heart-icon-full.png'
    public coracaoVazio : string = 'assets/img/heart-icon.png'

  constructor() { }

  ngOnInit(): void {
  }

}
