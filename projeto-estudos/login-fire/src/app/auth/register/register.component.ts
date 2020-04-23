import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import User from '../User.model'
import Auth from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'username': new FormControl(null),
    'password': new FormControl(null),
    'repeat-password': new FormControl(null)
  })

  constructor(private auth: Auth, private route: Router) { }

  ngOnInit(): void {
  }

  public registerUser(): void {
    console.log(this.form)

    let user: User = new User(
      this.form.value.email,
      this.form.value.username,
      this.form.value.password
    )

    this.auth.registerUser(user)

    this.route.navigate(['login'])


  }

}
