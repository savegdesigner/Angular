import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component'
import { PostsComponent } from './home/posts/posts.component'

import Auth from './auth/auth.service'

// FIrebase
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/database'

// Material
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import AuthGuard from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatCardModule
  ],
  providers: [ Auth, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
