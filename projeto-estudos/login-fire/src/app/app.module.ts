import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component'
import { PostsComponent } from './home/posts/posts.component'
import { AddPostComponent } from './home/add-post/add-post.component'

// Services
import AuthGuard from './auth-guard.service';
import Auth from './auth/auth.service'
import Db from './db.service';
import Upload from './upload.service';

// Firebase
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/database'

// Material
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent
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
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [ Auth, AuthGuard, Db, Upload ],
  bootstrap: [AppComponent]
})
export class AppModule { }
