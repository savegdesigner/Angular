import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ModalProductComponent } from './modal-product/modal-product.component'
// import { AngularFireDatabase } from '@angular/fire/database'

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
 
export interface dbStuff {
  name: string
  text: string
}

const DATA: dbStuff[] = []

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'crud-firebase';
  displayedColumns: string[] = ['name', 'text'];
  items: Observable<any[]>
  dataSource

  constructor(public dialog: MatDialog, private db: AngularFirestore) {
    this.items = db.collection('test').valueChanges()
    this.dataSource = this.items
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

}
