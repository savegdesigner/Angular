import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ModalProductComponent } from './modal-product/modal-product.component'

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

import { CrudService } from './crud.service'
import { Crud } from './crud.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'crud-firebase';
  displayedColumns: string[] = ['name', 'text', 'button'];
  // items: Observable<any[]>
  dataSource
  dataItems: Array<any> = []

  constructor(public dialog: MatDialog, private crudService: CrudService) {
    // this.items = this.db.read()
    // this.dataSource = this.items
  }

  ngOnInit(){

    this.dataSource = this.crudService.read()

  }

  public insert(): void{
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '250px',
      data: {}
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      });

  } 

  create(data: Crud){
    this.crudService.create(data)
  }

  update(data: Crud){
    this.crudService.update(data)
  }

  delete(data: Crud){
    this.crudService.delete(data)
  }

}
