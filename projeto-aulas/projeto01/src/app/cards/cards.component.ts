import { Component, OnInit } from '@angular/core'
import Dog from '../shared/Dogs'
import dogs from './dogs.mock'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public dogs: Array<Dog> = dogs

  constructor() { }

  ngOnInit(): void {
    console.log(dogs)
  }

}
