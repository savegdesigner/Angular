import { Component, OnInit } from '@angular/core';
import Crud from '../crud.model';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-read',
  templateUrl: './crud-read.component.html',
  styleUrls: ['./crud-read.component.scss']
})
export class CrudReadComponent implements OnInit {

  itemsList: Array<Crud>
  displayedColumns: string[] = ['id', 'name', 'lastName', 'actions']

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.read().subscribe(items => {
      this.itemsList = items.map(item => {
        return {
          id: item.payload.doc.id,
          name: item.payload.doc.data()['name'],
          lastName: item.payload.doc.data()['lastName']
        }
      })
      console.log(this.itemsList)
    })

  }

}
