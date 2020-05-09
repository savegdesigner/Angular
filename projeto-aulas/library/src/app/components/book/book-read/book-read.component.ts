import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {

  public ELEMENT_DATA: Array<any> = [
    {id: 1, name: 'Clean Code', author: 'Robert C. Martin'},
  ]

  displayedColumns: string[] = ['id', 'name', 'author', 'update', 'delete']
  dataSource = this.ELEMENT_DATA

  constructor() { }

  ngOnInit(): void {}

  public update(): void{
    console.log('update')
  }

  public delete(): void{
    console.log('delete')
  }

}
