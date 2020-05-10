import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import Book from '../Book.model'

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    author: new FormControl(),
    category: new FormControl()
  })

  constructor(
    private bookService: BookService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public create(): void {
    let id = 0
    let bookName = this.form.value.name
    let bookAuthor = this.form.value.author
    let bookCategory = this.form.value.category

    let book: Book = new Book(id, bookName, bookAuthor, bookCategory)

    this.bookService.create(book)

    this.route.navigate(['books'])
  }

  public cancel(): void {
    this.route.navigate(['books'])
  }

}
