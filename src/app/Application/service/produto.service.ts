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
        return this.http.get<ProdutoModel[]>('http://localhost:8080/produto'');
    }

}