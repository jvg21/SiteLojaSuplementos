import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PedidoModel } from "../model/pedido.model";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    constructor(private http: HttpClient) { }

    salvar(pedido: PedidoModel): Observable<PedidoModel> {
        return this.http.post<PedidoModel>('http://localhost:8080/pedido/criar', pedido);
    }

    listar(idCliente:number): Observable<PedidoModel[]> {
        let x =  this.http.get<PedidoModel[]>('http://localhost:8080/pedido/listar/'+idCliente);
        return x;
    }

    listarAll(): Observable<PedidoModel[]> {
        let x =  this.http.get<PedidoModel[]>('http://localhost:8080/pedido/listarAll');
        return x;
    }
    
    deleteAll(idCliente:number){
        return this.http.delete('http://localhost:8080/pedido/limpar/'+idCliente);
    };
    
    delete(id:number){
        return this.http.delete('http://localhost:8080/pedido/excluir/'+id);
    };

    entregar(id:number){
        return this.http.put('http://localhost:8080/pedido/entrega/'+id,null);
    }
    

    
}