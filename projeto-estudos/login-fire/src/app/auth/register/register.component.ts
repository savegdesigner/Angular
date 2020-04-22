import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import User from '../User.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'username': new FormControl(null),
    'password': new FormControl(null),
    'repeat-password': new FormControl(null)
  })

  constructor() { }

  ngOnInit(): void {
  }

  public registerUser(): void {
    console.log(this.form)

    let user: User = new User(
      this.form.value.username,
      this.form.value.password
    )

    console.log(user)

  }

}
