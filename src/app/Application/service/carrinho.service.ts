import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CarrinhoModel } from "../model/carrinho.model";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {

    constructor(private http: HttpClient) { }

    salvar(carrinho: CarrinhoModel): Observable<CarrinhoModel> {
        return this.http.post<CarrinhoModel>('http://localhost:8080/carrinho/criar', carrinho);
    }

    listar(idCliente:number): Observable<CarrinhoModel[]> {
        let x =  this.http.get<CarrinhoModel[]>('http://localhost:8080/carrinho/listar/'+idCliente);
        return x;
    }
    
    deleteAll(idCliente:number):Observable<String>{
        return this.http.delete<String>('http://localhost:8080/carrinho/limpar/'+idCliente);
    };
    
    delete(id:number):Observable<String>{
        return this.http.delete<String>('http://localhost:8080/carrinho/excluir/'+id);
    };
    

    
}