import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component'
import { CrudComponent } from './views/crud/crud.component';
import { CrudCreateComponent } from './components/crud/crud-create/crud-create.component';

// Http Client
import { HttpClientModule } from '@angular/common/http'

// Firebase / Firestore
import { AngularFireModule  } from '@angular/fire'
import { AngularFirestoreModule  } from '@angular/fire/firestore'

// Environment
import { environment } from '../environments/environment'

// Material
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CrudComponent,
    CrudCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
