import { Injectable } from '@angular/core';
import Book from './Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public read(): void {

  }
  
  public create(book: Book): void{
      console.log(book)
  }
}
