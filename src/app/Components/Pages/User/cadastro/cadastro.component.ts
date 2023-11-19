import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cep } from 'src/app/Application/common/mask/cep/cep.class';
import { checkPasswords } from 'src/app/Application/common/confirmPassword';
import { Cpf } from 'src/app/Application/common/mask/cpf/cpf.class';
import { cadastroForm } from 'src/app/Application/common/form/usuario.form';
import { PasswordShow } from 'src/app/Application/common/passwordShow';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cpf = new Cpf();
  cep = new Cep();
  PasswordShow = new PasswordShow();
  cadastroForm = cadastroForm;
  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  adicionar() {
    let user = new UsuarioModel;
    user.id = Number(this.cadastroForm.controls['Id'].value);
    user.nome = this.cadastroForm.controls['Nome'].value || '';
    user.email = this.cadastroForm.controls['Email'].value || '';
    user.cpf = this.cadastroForm.controls['Cpf'].value || '';
    user.senha = this.cadastroForm.controls['Password'].value || '';
    user.uf = this.cadastroForm.controls['Uf'].value || '';
    user.cidade = this.cadastroForm.controls['Cidade'].value || '';
    user.endereco = this.cadastroForm.controls['Endereco'].value || '';
    user.complemento = this.cadastroForm.controls['Complemento'].value || '';
    user.numero = Number(this.cadastroForm.controls['Numero'].value )|| undefined;
    user.cep = this.cadastroForm.controls['Cep'].value || '';
    user.acesso = 'Usuario';

    this.usuarioService.salvar(user).subscribe(usuario => {
      this.usuarioService.setLogin(usuario).subscribe(logado => {
        alert("Seja Bem Vindo, " + logado.nome);
        window.location.href = '/';

      })
    });
  }
}



