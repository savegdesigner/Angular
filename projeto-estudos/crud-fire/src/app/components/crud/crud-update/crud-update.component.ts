import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import Crud from '../crud.model';

@Component({
  selector: 'app-crud-update',
  templateUrl: './crud-update.component.html',
  styleUrls: ['./crud-update.component.scss']
})
export class CrudUpdateComponent implements OnInit {

  item: Crud = {
    name: '',
    lastName: ''
  }
  itemId: string = this.route.snapshot.paramMap.get('id')

  constructor(
    private crudservice: CrudService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.crudservice.readById(this.itemId).then(doc => {
      console.log(doc)
      this.item.name =  doc.data()['name']
      this.item.lastName = doc.data()['lastName']
      }
    )

  }

  updateItem(): void {
    this.crudservice.update(this.itemId, this.item)
    this.crudservice.showMessage('Item updated!')
    this.router.navigate(['/items'])
  }

  cancel(): void {
    this.router.navigate(['/items'])
  }

}
