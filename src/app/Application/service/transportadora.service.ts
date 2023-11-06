import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TransportadoraModel } from "../model/transportadora.model";

@Injectable({
    providedIn: 'root'
})
export class transportadoraService {

    constructor(private http: HttpClient) { }

    salvar(transportadora: TransportadoraModel): Observable<TransportadoraModel> {
        return this.http.post<TransportadoraModel>('http://localhost:8080/transportadora/criar', transportadora);
    }

    listar(): Observable<TransportadoraModel[]> {
        let x =  this.http.get<TransportadoraModel[]>('http://localhost:8080/transportadora/listar');
        x.forEach((s)=>{
            s.map((w)=>{
                return console.log(w);
                
            })
            
        })
        return x;
    }

    alterar(transportadora: TransportadoraModel): Observable<TransportadoraModel> {
        let url = 'http://localhost:8080/transportadora/atualizar/'+transportadora.id;
        // console.log(transportadora,url);
        
        return this.http.put<TransportadoraModel>(url,transportadora);
    }

}