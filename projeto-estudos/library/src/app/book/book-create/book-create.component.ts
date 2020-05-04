import { Component, OnInit } from '@angular/core';
import Db from 'src/app/db.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Book from 'src/app/Book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'name': new FormControl(),
    'author': new FormControl()
  })

  constructor(
    private db: Db,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public createBook():void{

    let book = new Book('000', 'Deltora Quest', 'Emilly Rhoda')

    this.db.createBook(book)
    
    this.router.navigate([''])
  }

}
