import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CrudService } from '../crud.service';
import Crud from '../crud.model';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.scss']
})
export class CrudCreateComponent implements OnInit {

  item: Crud = {
    name: '',
    lastName: ''
  }

  constructor(
    private router: Router,
    private crudService: CrudService
    ) { }

  ngOnInit(): void {
    
  }

  createItem(): void {
    this.crudService.create(this.item)
    this.crudService.showMessage('Item created!')
    this.router.navigate(['/items'])

  }

  cancel(): void {
    this.router.navigate(['/items'])
  }

}
