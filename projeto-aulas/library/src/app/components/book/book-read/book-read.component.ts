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
      .then(books => {
        this.books = books
        console.log(books)
      })
      .catch(err => {
        console.log(err)
      })
  }

  public update(): void{
    console.log('update')

  }

  public delete(): void{
    console.log('delete')

  }

}
