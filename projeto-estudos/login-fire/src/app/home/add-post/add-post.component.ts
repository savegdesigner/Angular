import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import Db from 'src/app/db.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  title: string = ''
  description: string =''

  constructor(
    public dialogRef: MatDialogRef<AddPostComponent>,
    private db: Db
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  post(): void {
    this.dialogRef.close();
    console.log(this.description, this.title)
    this.db.post('')
  }
}
