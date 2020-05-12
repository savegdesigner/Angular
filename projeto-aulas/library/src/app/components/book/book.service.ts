import { Injectable } from '@angular/core';
import Book from './Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public booksShelf: Array<Book>

  constructor() { }

  public read(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.booksShelf = JSON.parse(localStorage.getItem('books'))
      
      if(this.booksShelf !== undefined)
          resolve(this.booksShelf)
      reject('No book find')

    })
    
  }
  
  public create(book: Book): void{
    this.booksShelf.push(book)
    localStorage.setItem('books', JSON.stringify(this.booksShelf))
  }

}
