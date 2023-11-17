import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  public LoginStatus = false; 
  public LoginAcess = 'Usuario';

  constructor(private usuarioService: UsuarioService,private router: Router){
  }
  ngOnInit(): void {
    // console.log(this.LoginStatus);

    this.usuarioService.getLogin().subscribe({
      next: (usuario)=>{
        if(usuario.id!=null|| usuario!= undefined){
          this.LoginStatus = true;
          this.LoginAcess = usuario.acesso || 'Usuario';
        }
      },
      error:(e) => (console.info(e)),
      complete:() => console.info('complete')
      
    })
  
  }
  logout(){
    this.usuarioService.deleteLogin().subscribe();
    alert("Deslogando ...")
    window.location.href = '/';
  }

  
  }

