import { Component, OnInit } from '@angular/core';
import Auth from '../auth/auth.service';

// Dialog
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AddPostComponent } from './add-post/add-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: Auth,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  logout(): void{
      this.auth.logout()
  }

  // dialog
  openDialog(): void{
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '250px',
      data: {}
    });
  }
}
