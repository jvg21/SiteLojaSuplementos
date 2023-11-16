import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordShow } from 'src/app/Application/common/passwordShow';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.router = router;
  }
  PasswordShow = new PasswordShow();

  loginForm = new FormGroup({
    Email: new FormControl('',
      [
        Validators.required, Validators.email, Validators.maxLength(80),
      ]),
    Password: new FormControl('',
      [
        Validators.required,Validators.maxLength(30)
      ])
  })


  login() {
    let email = this.loginForm.controls['Email'].value || "";
    let senha = this.loginForm.controls['Password'].value || "";
    this.usuarioService.logar(email, senha).subscribe(usuario => {
      if (usuario.id != null) {
        this.usuarioService.setLogin(usuario).subscribe(logado => {
          alert("Seja Bem Vindo, " + logado.nome);
          window.location.href = '/';
        })

      } else {
        alert("Usuário e/ou Senha Incorreto(s)")
      }
    });

  }
}
