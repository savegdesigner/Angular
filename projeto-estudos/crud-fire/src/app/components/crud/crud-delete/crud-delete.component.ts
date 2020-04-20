import { Component, OnInit } from '@angular/core';
import Crud from '../crud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { database } from 'firebase';

@Component({
  selector: 'app-crud-delete',
  templateUrl: './crud-delete.component.html',
  styleUrls: ['./crud-delete.component.scss']
})
export class CrudDeleteComponent implements OnInit {

  item: Crud = {
    name: '',
    lastName: ''
  }
  itemId: string = this.route.snapshot.paramMap.get('id')

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
    ) { }

  ngOnInit(): void {
    this.crudService.readById(this.itemId).then(doc => {
      this.item = {
        name: doc.data()['name'],
        lastName: doc.data()['lastName']
      }
    })

  }

  deleteItem(){
    this.crudService.delete(this.itemId)
    this.crudService.showMessage('Item deleted!')
    this.router.navigate(['items'])

  }

  cancel(): void{
    this.router.navigate(['items'])

  }

}
