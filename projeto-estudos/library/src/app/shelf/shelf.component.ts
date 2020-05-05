import { Component, OnInit } from '@angular/core';
import Db from '../db.service';
import Book from '../Book.model';
import * as firebase from 'firebase'

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  displayedColumns: string[] = ['name', 'author', 'actions']
  dataSource: Array<Book> = []

  constructor(private db: Db) { }

  ngOnInit(): void {
    this.readBooks()
    
  }

  public readBooks(): void{
    this.db.getBooks().then((books: any) => {
      console.log(books)
      this.dataSource = books
    })
  }

  deleteBook(id: string): void{
    this.db.deleteBook(id)
  }

}
