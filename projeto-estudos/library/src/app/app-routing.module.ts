import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { ShelfComponent } from './shelf/shelf.component';


const routes: Routes = [
  {
    path: '',
    component: ShelfComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
