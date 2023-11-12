import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public LoginStatus = false; 
  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    console.log(this.LoginStatus);

    this.usuarioService.getLogin().forEach(x=>{
      if(x.id!=null|| x!= undefined){
        this.LoginStatus = true;
      }
      
    })
  
  }
    
  }

