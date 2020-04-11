import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Crud } from './crud.model'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private db : AngularFirestore) { }

  read(){
    return this.db.collection('test').snapshotChanges().pipe()
  }

  create(data: Crud){
    return this.db.collection('test').add(data)
  }

  update(data: Crud){
    return this.db.doc('test/' + data.id).update(data)
  }

  delete(data: Crud){
    this.db.doc('test/' + data.id).delete()
  }

}
