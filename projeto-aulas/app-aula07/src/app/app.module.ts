import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio03Component } from './exercicio03/exercicio03.component';

import { FormsModule } from '@angular/forms';
import { Exercicio04Component } from './exercicio04/exercicio04.component';
import { Exercicio05Component } from './exercicio05/exercicio05.component';
import { Exercicio06Component } from './exercicio06/exercicio06.component';
import { Exercicio07Component } from './exercicio07/exercicio07.component';
import { Exercicio08Component } from './exercicio08/exercicio08.component';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { ExercicioNgswitchComponent } from './exercicio-ngswitch/exercicio-ngswitch.component'

@NgModule({
  declarations: [
    AppComponent,
    Exercicio03Component,
    Exercicio04Component,
    Exercicio05Component,
    Exercicio06Component,
    Exercicio07Component,
    Exercicio08Component,
    Exemplo01Component,
    ExercicioNgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
