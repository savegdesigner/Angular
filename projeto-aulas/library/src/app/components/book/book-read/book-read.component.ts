import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import Book from '../Book.model';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {

  public books: Array<Book> = []

  displayedColumns: string[] = ['id', 'name', 'author', 'category', 'update', 'delete']
  dataSource = this.books

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.read()
  }

  public read(): void {
    this.bookService.read()
      .forEach(book => {
        this.books.push(book)
      })
     
  }

  public update(bookId: string): void{

  }

  public delete(bookId: string): void{

  }

}
