import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import Book from '../Book.model';
import { Router } from '@angular/router';

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
    private bookService: BookService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.read()
  }

  public read(): void {
    this.bookService.read()
      .forEach(book => {
        this.books.push(book)
      })

      this.dataSource = this.books

  }

  public update(bookId: string): void{
    this.route.navigate([`books/update/${bookId}`])
  }

  public delete(bookId: string): void{
    this.books = []
    this.bookService.delete(bookId)
    this.read()
  }

}
