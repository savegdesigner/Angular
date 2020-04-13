import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CrudService } from '../crud.service'
import { Crud } from '../crud.model'

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent {

  public modalData = {
    id: null,
    name: null, 
    text: null
  }

  constructor(
    public dialogRef: MatDialogRef<ModalProductComponent>,
    private crudService : CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(data: Crud){
    this.crudService.create(data)
  }

}
