import { Component, OnInit } from '@angular/core';
import Db from '../db.service';
import Book from '../Book.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  displayedColumns: string[] = ['name', 'author', 'actions']
  dataSource: Array<any> = []

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

}
