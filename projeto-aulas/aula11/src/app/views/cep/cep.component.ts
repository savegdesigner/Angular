import { Component, OnInit } from '@angular/core';
import Endereco from 'src/app/model/Endereco.model';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  public cep: string = ''
  public endereco: Endereco

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  public consultarCep(): void {
    this.cepService.getCep(this.cep)
      .subscribe(endereco => {
        this.endereco = endereco
      }, err => {
        console.log(err)
      })
      
  }

}
