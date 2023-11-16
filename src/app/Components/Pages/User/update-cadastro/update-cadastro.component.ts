import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordShow } from 'src/app/Application/common/passwordShow';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-update-cadastro',
  templateUrl: './update-cadastro.component.html',
  styleUrls: ['./update-cadastro.component.css']
})
export class UpdateCadastroComponent {
  PasswordShow = new PasswordShow();
  selectedRow = new UsuarioModel;
  constructor(private usuarioService: UsuarioService) { }
  adicionarControl = true;

  cadastroForm = new FormGroup({
    Id : new FormControl({ value: '', disabled: true }),
    Nome : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required]),
    Cpf : new FormControl('',[Validators.required]),
    Senha : new FormControl('',[Validators.required]),
    Csenha : new FormControl(''),
    Uf : new FormControl('',[Validators.required]),
    Cidade : new FormControl('',[Validators.required]),
    Endereco : new FormControl('',[Validators.required]),
    Numero : new FormControl(0,[Validators.required]),
    Complemento : new FormControl(''),
    Cep : new FormControl('',[Validators.required]),
    Acesso: new FormControl('')
  });
  
  
  ngOnInit(): void {
    this.usuarioService.getLogin().subscribe(usuario => {
      this.cadastroForm.controls['Id'].setValue(String(usuario.id));
      this.cadastroForm.controls['Nome'].setValue(String(usuario.nome));
      this.cadastroForm.controls['Email'].setValue(String(usuario.email));
      this.cadastroForm.controls['Cpf'].setValue(String(usuario.cpf));
      this.cadastroForm.controls['Senha'].setValue(String(usuario.senha));
      this.cadastroForm.controls['Cep'].setValue(String(usuario.cep));
      this.cadastroForm.controls['Uf'].setValue(String(usuario.uf));
      this.cadastroForm.controls['Cidade'].setValue(String(usuario.cidade));
      this.cadastroForm.controls['Endereco'].setValue(String(usuario.endereco));
      this.cadastroForm.controls['Acesso'].setValue(String(usuario.acesso)||'Usuario');
      this.cadastroForm.controls['Numero'].setValue(Number(usuario.numero) || 0);
    // console.log(this.dataSource)
  });

  }

  alterar() {
    let produto = new UsuarioModel;
    produto.id = Number(this.cadastroForm.controls['Id'].value);
    produto.nome = this.cadastroForm.controls['Nome'].value || '';
    produto.email = this.cadastroForm.controls['Email'].value || '';
    produto.cpf = this.cadastroForm.controls['Cpf'].value || '';
    produto.senha = this.cadastroForm.controls['Senha'].value || '';
    produto.cep = this.cadastroForm.controls['Cep'].value || '';
    produto.uf = this.cadastroForm.controls['Uf'].value || '';
    produto.endereco = this.cadastroForm.controls['Endereco'].value || '';
    produto.cidade = this.cadastroForm.controls['Cidade'].value || '';
    produto.complemento = this.cadastroForm.controls['Complemento'].value || '';
    produto.numero = Number(this.cadastroForm.controls['Numero'].value);
    produto.acesso = this.cadastroForm.controls['Acesso'].value || 'Usuario';


    this.usuarioService.alterar(produto).subscribe(produto => {
      this.usuarioService.setLogin(produto).subscribe(logado => {
        alert(logado.nome + " Alterado Com sucesso");
        window.location.href = '/';
      })
      
    });

  } 
}
