import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import User from '../User.model'
import Auth from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null),
    'repeat-password': new FormControl(null)
  })

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }

  public registerUser(): void {
    console.log(this.form)

    let user: User = new User(
      this.form.value.email,
      this.form.value.password
    )

    this.auth.registerUser(user)

  }

}
