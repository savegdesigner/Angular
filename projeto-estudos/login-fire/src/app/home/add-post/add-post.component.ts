import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import Db from 'src/app/db.service';

import * as firebase from 'firebase'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  email: string
  title: string = ''
  description: string =''
  image: any

  constructor(
    public dialogRef: MatDialogRef<AddPostComponent>,
    private db: Db
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)

        this.email = user.email
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  post(): void {
    this.db.post({
      email: this.email,
      title: this.title,
      description: this.description
    })

    this.dialogRef.close();
  }

  public imageUpload(event: Event): void{
    console.log((<HTMLInputElement>event.target).files)
  }

}