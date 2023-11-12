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
  router: Router;
  constructor(private usuarioService: UsuarioService, router: Router) {
    this.router = router;
  }
  PasswordShow = new PasswordShow();

  loginForm = new FormGroup({
    Email: new FormControl('',
      [
        Validators.required, Validators.email, Validators.maxLength(80),
      ]),
    PassWord: new FormControl('',
      [
        Validators.required
        //Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,16}$/) // a senha deve conter um numero, uma letra maiuscula e um caractere especial
      ])
  })


  login() {
    let email = this.loginForm.controls['Email'].value || "";
    let senha = this.loginForm.controls['PassWord'].value || "";
    this.usuarioService.logar(email, senha).subscribe(usuario => {
      if (usuario.id != null) {
        this.usuarioService.setLogin(usuario).subscribe(logado => {
          alert("Seja Bem Vindo, " + logado.nome);
          this.router.navigate(['/', '/']);
        })

      } else {
        alert("Usuário e/ou Senha Incorreto(s)")
      }
    });

  }
}
