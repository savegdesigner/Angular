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

      if(this.booksShelf == null)
        this.booksShelf = []
      return this.booksShelf
    
  }

  public readById(bookId: string): Book {
    for(let i = 0; i < this.booksShelf.length; i++){
      if(this.booksShelf[i].id == bookId){
         return this.booksShelf[i]
      }
    }
  }
  
  public create(book: Book): void{
    this.booksShelf.push(book)
    localStorage.setItem('books', JSON.stringify(this.booksShelf))
    
  }

  public update(book: Book): void {
    for(let i = 0; i < this.booksShelf.length; i++){
      if(this.booksShelf[i].id == book.id){
        this.booksShelf.splice(i, 1)
        this.booksShelf.push(book)
      }
    }

    localStorage.setItem('books', JSON.stringify(this.booksShelf))

  }

  public delete(bookId: string): void {
    for(let i = 0; i < this.booksShelf.length; i++){
      if(this.booksShelf[i].id == bookId){
        this.booksShelf.splice(i, 1)
      }
    }

    localStorage.setItem('books', JSON.stringify(this.booksShelf))
  }

}
