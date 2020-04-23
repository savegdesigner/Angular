import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-fire';

  ngOnInit(): void {

    firebase.initializeApp(environment.firebaseConfig)

  }
}
