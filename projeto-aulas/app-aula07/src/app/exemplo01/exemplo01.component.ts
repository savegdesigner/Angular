import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.scss']
})
export class Exemplo01Component implements OnInit {

  pokemon: string

  constructor() { }

  ngOnInit(): void {
  }

}
