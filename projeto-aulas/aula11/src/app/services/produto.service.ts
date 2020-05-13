import { Injectable } from '@angular/core';
import Produto from '../model/Produto.model';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url: string = 'https://oficinacordova.azurewebsites.net/android/rest/produto'

  constructor(private http: HttpClient) { }

  public listarProdutos(): Observable<Array<Produto>> {
    return this.http.get<Array<Produto>>(this.url)
  }
}
