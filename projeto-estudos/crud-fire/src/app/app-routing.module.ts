import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudComponent } from './views/crud/crud.component';
import { CrudCreateComponent } from './components/crud/crud-create/crud-create.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
