import listaOfertas from './utils/ofertas'
import Oferta from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

import 'rxjs'

@Injectable()
export class OfertasService {

    private http: HttpClient

    constructor(http: HttpClient){
        this.http = http
    }


    public getOfertas(): Promise<Oferta[]> {

        // Req HTTP, return promise Array<Oferta>
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
                .toPromise()
                    .then((resposta: any) => {
                        console.log(resposta)
                        return resposta
                    })
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
            .toPromise()
                .then((resposta: any) => {
                    return resposta
                })

    }

    // Exemplo de Promises
    // public getOfertas2(): Promise<Array<Oferta>> {


    //     return new Promise((resolve, reject) => {

    //         // processamento --> chama ressolve ou reject

    //         let passou = true     
    //         if(passou){
    //             setTimeout(() => resolve(this.ofertas), 2000) 

    //         }else{
    //             reject({codigo: 404, mensagem: 'NOT FOUND ERROR'})

    //         }


    //     }) 
    //         .then((ofertas: Oferta[]) => {
    //             console.log('Primeiro then')
    //             return ofertas
    //         })
    //             .then((ofertas) => {
    //                 console.log('Segundo then')
    //                 return new Promise((resolve2, reject2) => {
    //                     setTimeout(() => {resolve2(ofertas)},2000)
    //                 })
    //             })
    //                 .then((ofertas: Oferta[]) => {
    //                     console.log('Terceiro then')
    //                     return ofertas
    //                 })
    // }

}