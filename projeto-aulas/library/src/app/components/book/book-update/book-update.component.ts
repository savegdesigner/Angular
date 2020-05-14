import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import Book from '../Book.model';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    author: new FormControl(),
    category: new FormControl()
  })

  public bookId: string
  public book: Book

  constructor(
    private bookService: BookService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBookId()
    this.getBook()
  }

  public getBookId(): void {
    this.activatedRoute.params
      .subscribe(param => {
        this.bookId = param.id
      })
  }

  public getBook(): void {
    let bookToUpdate: Book = this.bookService.readById(this.bookId)
    this.book = bookToUpdate
  }

  public update(): void {
    this.book.name = this.form.value.name
    this.book.author = this.form.value.author
    this.book.category = this.form.value.category

    this.bookService.update(this.book)
    this.route.navigate(['books'])
  }

  public cancel(): void {
    this.route.navigate(['books'])
  }

}
