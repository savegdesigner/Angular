import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.scss']
})
export class CrudCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private crudService: CrudService
    ) { }

  ngOnInit(): void {
    
  }

  createItem(): void {
    this.crudService.create({name: 'Vinicius', lastName: 'Savegnago'})
    this.crudService.showMessage('Item created!')
    this.router.navigate(['/items'])
  }

  cancel(): void {
    this.router.navigate(['/items'])
  }

}
