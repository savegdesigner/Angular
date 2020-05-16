import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { CardsComponent } from './cards/cards.component';
import { Exercicio01Component } from './exercicio01/exercicio01.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CardsComponent,
    Exercicio01Component
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
