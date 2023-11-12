import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-layout-adm',
  templateUrl: './layout-adm.component.html',
  styleUrls: ['./layout-adm.component.css']
})
export class LayoutAdmComponent {

  constructor(private usuarioService: UsuarioService,private router: Router){
  }
  ngOnInit(): void {
    this.usuarioService.getLogin().forEach(x=>{
  
      if(x.id!=null|| x!= undefined){
        if(x.acesso != 'Adm')
        window.location.href = '/';
      }
    })
  
  }

}
