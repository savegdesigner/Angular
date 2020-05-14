import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookReadComponent } from './components/book/book-read/book-read.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookReadComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/update/:id',
    component: BookUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
