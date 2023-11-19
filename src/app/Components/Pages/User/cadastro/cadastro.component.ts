import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cep } from 'src/app/Application/common/cep/cep.class';
import { checkPasswords } from 'src/app/Application/common/confirmPassword';
import { Cpf } from 'src/app/Application/common/cpf/cpf.class';
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

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }
  PasswordShow = new PasswordShow();

  cadastroForm = new FormGroup({
    Id: new FormControl(''),
    Nome: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(80)]),
    Cpf: new FormControl('', [Validators.required, Validators.maxLength(14),Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    Uf: new FormControl('', [Validators.required]),
    Cidade: new FormControl('', [Validators.required]),
    Endereco: new FormControl('', [Validators.required]),
    Numero: new FormControl(null, [Validators.required]),
    Complemento: new FormControl(''),
    Cep: new FormControl('', [Validators.required,Validators.maxLength(14),Validators.pattern(/^\d{5}-\d{3}$/)]),
  }, {
    validators: checkPasswords
  }

  );

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
    user.numero = this.cadastroForm.controls['Numero'].value || 0;
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



