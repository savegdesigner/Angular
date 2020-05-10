import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

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
    console.log(this.form.value)
  }

  public cancel(): void {
    this.route.navigate(['books'])
  }

}
