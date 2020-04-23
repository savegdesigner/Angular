import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Auth from '../auth.service';
import User from '../User.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }

  public login(): void {
    console.log(this.form)

    let user: User = {
      email: this.form.value.email, 
      password: this.form.value.password
    }

    this.auth.loginUser(user)

  }

}
