import { Component, OnInit } from '@angular/core';
import Produto from 'src/app/model/Produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  public produtos: Array<Produto>

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  public listarProdutos(): void {
    this.produtoService.listarProdutos()
      .subscribe(listaProdutos => {
        this.produtos = listaProdutos
      },
      err => {
        console.log(err)
      })
  }

}
