import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from "../model/usuario.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }


    salvar(usuario: UsuarioModel): Observable<UsuarioModel> {
        return this.http.post<UsuarioModel>('http://localhost:8080/usuario/criar', usuario);
    }

    listar(): Observable<UsuarioModel[]> {
        return this.http.get<UsuarioModel[]>('http://localhost:8080/usuario/listar');
    }

    alterar(usuario: UsuarioModel): Observable<UsuarioModel> {
        let url = 'http://localhost:8080/produto/atualizar/'+usuario.id;
        
        return this.http.put<UsuarioModel>(url,usuario);
    }

}