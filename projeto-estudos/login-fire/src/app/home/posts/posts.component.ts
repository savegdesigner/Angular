import { Component, OnInit } from '@angular/core';
import Db from 'src/app/db.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public email: string

  constructor(private db: Db) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email

      this.updateTimeLine()
    })

  }

  public updateTimeLine(): void {
    this.db.getPosts(this.email)

  }

}
