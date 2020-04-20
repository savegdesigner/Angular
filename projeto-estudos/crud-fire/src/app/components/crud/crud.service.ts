import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import  Crud  from './crud.model'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  firebase: string = 'crud-fire'

  constructor(
    private snackBar: MatSnackBar,
    private fireStore: AngularFirestore
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(item: Crud): Promise<any> {
      return this.fireStore.collection(this.firebase).add(item)
        .then(data => {
          console.log(data)
          console.log(data.id)
        })
        .catch(err => {
          console.log(err)
        })
        
  }

  read(): Observable<any[]> {
    return this.fireStore.collection(this.firebase).snapshotChanges()
    
  }

  readById(id: string): Promise<any>{
    return this.fireStore.collection(this.firebase).doc(id).ref.get()

  }

  update(id: string, item: Crud): Promise<any> {
    const url = `${this.firebase}/${id}`
    return this.fireStore.doc(url).update(item)
  }

  delete(id: string) {
    const url = `${this.firebase}/${id}`
    return this.fireStore.doc(url).delete()
  }

}
