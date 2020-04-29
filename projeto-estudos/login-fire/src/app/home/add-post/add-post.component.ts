import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import Db from 'src/app/db.service';

import * as firebase from 'firebase'
import Upload from 'src/app/upload.service';

import { interval, Subject } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @Output() public refreshTimeline: EventEmitter<any> = new EventEmitter<any>()

  email: string
  title: string = ''
  description: string =''
  image: any

  public postProgress: string = 'pending'
  public uploadPercentage: number

  constructor(
    public dialogRef: MatDialogRef<AddPostComponent>,
    private db: Db,
    private upload: Upload
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
        // console.log(user)

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
      description: this.description,
      image: this.image[0]
    })

    // let loading = Math.round((this.upload.state.bytesTransferred / this.upload.state.totalBytes) * 100)

    let followUpload = interval(1500).subscribe(() => {
      // console.log(this.upload.status)
      // console.log(this.upload.state)
      this.postProgress = 'uploading'

      if(this.upload.status == 'uploaded'){
        followUpload.unsubscribe()
        this.postProgress = 'uploaded'
        this.dialogRef.close();

        // this.refreshTimeline.emit()

      }

    })

  }

  public imageUpload(event: Event): void{
    this.image = (<HTMLInputElement>event.target).files

  }

}