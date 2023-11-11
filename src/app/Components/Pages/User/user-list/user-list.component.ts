import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'uf', 'cidade', 'endereco', 'numero', 
  'complemento', 'cep', 'acesso'];
  dataSource: UsuarioModel[] = [];
  selectedRow = new UsuarioModel;
  constructor(private usuarioService: UsuarioService) { }

  adicionarControl = true;

  cadastroForm = new FormGroup({
    Id : new FormControl({ value: '', disabled: true }),
    Nome : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required]),
    Cpf : new FormControl('',[Validators.required]),
    Senha : new FormControl(''),
    Csenha : new FormControl(''),
    Uf : new FormControl('',[Validators.required]),
    Cidade : new FormControl('',[Validators.required]),
    Endereco : new FormControl('',[Validators.required]),
    Numero : new FormControl(0,[Validators.required]),
    Complemento : new FormControl(''),
    Cep : new FormControl('',[Validators.required]),
    Acesso: new FormControl('')
  });

  setAdiconarControll(foo: boolean) {

    this.adicionarControl = foo;
    this.controlModal();

  }
  controlModal() {
    if (this.adicionarControl) {
      this.cadastroForm.controls['Id'].setValue('');
      this.cadastroForm.controls['Nome'].setValue('');
      this.cadastroForm.controls['Email'].setValue('');
      this.cadastroForm.controls['Cpf'].setValue('');
      this.cadastroForm.controls['Senha'].setValue('');
      this.cadastroForm.controls['Csenha'].setValue('');
      this.cadastroForm.controls['Cep'].setValue('');
      this.cadastroForm.controls['Uf'].setValue('');
      this.cadastroForm.controls['Cidade'].setValue('');
      this.cadastroForm.controls['Endereco'].setValue('');
      this.cadastroForm.controls['Complemento'].setValue('');
      this.cadastroForm.controls['Acesso'].setValue('');
      this.cadastroForm.controls['Numero'].setValue(null);
    } else {
      this.cadastroForm.controls['Id'].setValue(String(this.selectedRow.id));
      this.cadastroForm.controls['Nome'].setValue(String(this.selectedRow.nome));
      this.cadastroForm.controls['Email'].setValue(String(this.selectedRow.email));
      this.cadastroForm.controls['Cpf'].setValue(String(this.selectedRow.cpf));
      this.cadastroForm.controls['Senha'].setValue(String(this.selectedRow.senha));
      this.cadastroForm.controls['Cep'].setValue(String(this.selectedRow.cep));
      this.cadastroForm.controls['Uf'].setValue(String(this.selectedRow.uf));
      this.cadastroForm.controls['Cidade'].setValue(String(this.selectedRow.cidade));
      this.cadastroForm.controls['Endereco'].setValue(String(this.selectedRow.endereco));
      this.cadastroForm.controls['Acesso'].setValue(String(this.selectedRow.acesso)||'Usuario');
      this.cadastroForm.controls['Numero'].setValue(Number(this.selectedRow.numero) || 0);
    }
  }

  logs(row: UsuarioModel) {
    this.selectedRow = row;
    // console.log(this.selectedRow);

  }
  ngOnInit(): void {
    this.listar();
    // console.log(this.dataSource)
  }

  adicionar() {

    let produto = new UsuarioModel;
    produto.nome = this.cadastroForm.controls['Nome'].value || '';
    produto.email = this.cadastroForm.controls['Email'].value || '';
    produto.cpf = this.cadastroForm.controls['Cpf'].value || '';
    produto.senha = this.cadastroForm.controls['Senha'].value || '';
    produto.uf = this.cadastroForm.controls['Uf'].value || '';
    produto.cidade = this.cadastroForm.controls['Cidade'].value || '';
    produto.endereco = this.cadastroForm.controls['Endereco'].value || '';
    produto.numero = this.cadastroForm.controls['Numero'].value || 0;
    produto.complemento = this.cadastroForm.controls['Complemento'].value || '';
    produto.cep = this.cadastroForm.controls['Cep'].value || '';
    produto.acesso = this.cadastroForm.controls['Acesso'].value || 'Usuario';
   

    this.usuarioService.salvar(produto).subscribe(produto => {
      this.listar()
      alert(produto.nome + " Gravado Com sucesso");
    });

  }

  listar() {
    this.usuarioService.listar().subscribe({
      next: (produto) => this.dataSource = produto,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
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
      this.listar()
      alert(produto.nome + " Alterado Com sucesso");
    });

  }
}
