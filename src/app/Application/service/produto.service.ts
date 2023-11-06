import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProdutoModel } from "../model/produto.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) { }

    salvar(produto: ProdutoModel): Observable<ProdutoModel> {
        return this.http.post<ProdutoModel>('http://localhost:8080/produto', produto);
    }

    listar(): Observable<ProdutoModel[]> {
        let x =  this.http.get<ProdutoModel[]>('http://localhost:8080/produto/listar');
        // x.forEach((s)=>{
        //     s.map((w)=>{
        //         return console.log(w);
                
        //     })
            
        // })
        return x;
    }

    alterar(produto: ProdutoModel): Observable<ProdutoModel> {
        let url = 'http://localhost:8080/produto/atualizar/'+produto.id;
        return this.http.post<ProdutoModel>(url, produto);
    }

}