import { Injectable } from '@angular/core';
import Book from './Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public booksShelf: Array<Book> = []

  constructor() { }

  public read(): Array<Book> {
    this.booksShelf = JSON.parse(localStorage.getItem('books'))
    return this.booksShelf
  }
  
  public create(book: Book): void{
    this.booksShelf.push(book)
    localStorage.setItem('books', JSON.stringify(this.booksShelf))
  }

}
