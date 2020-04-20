import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudComponent } from './views/crud/crud.component';
import { CrudCreateComponent } from './components/crud/crud-create/crud-create.component';
import { CrudUpdateComponent } from './components/crud/crud-update/crud-update.component';
import { CrudDeleteComponent } from './components/crud/crud-delete/crud-delete.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'items',
    component: CrudComponent
  },
  {
    path: 'items/create',
    component: CrudCreateComponent
  },
  {
    path: 'items/update/:id',
    component: CrudUpdateComponent
  },
  {
    path: 'items/delete/:id',
    component: CrudDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
