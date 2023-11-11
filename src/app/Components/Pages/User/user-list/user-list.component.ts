import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordShow } from 'src/app/Application/common/passwordShow';
import { UsuarioModel } from 'src/app/Application/model/usuario.model';
import { UsuarioService } from 'src/app/Application/service/usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'cep', 'uf', 'cidade', 'endereco','numero','complemento','acesso'];
  dataSource: UsuarioModel[] = [];
  selectedRow = new UsuarioModel;
  PasswordShow = new PasswordShow();
  constructor(private usuarioService: UsuarioService) { }

  adicionarControl = true;

  usuarioForm = new FormGroup({
    Id: new FormControl({ value: '', disabled: true }),
    Nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Marca: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required,Validators.email]),
    Cep: new FormControl('', [Validators.required]),
    Uf: new FormControl('', [Validators.required]),
    Cidade: new FormControl('', [Validators.required]),
    Endereco: new FormControl('', [Validators.required]),
    Numero: new FormControl(0, [Validators.required]),
    Complemento: new FormControl('', [Validators.required]),
    Acesso: new FormControl('', [Validators.required]),

  })

  setAdiconarControll(foo: boolean) {
    this.adicionarControl = foo;
    this.controlModal();

  }
  controlModal() {
    if (this.adicionarControl) {
      this.usuarioForm.controls['Id'].setValue('');
      this.usuarioForm.controls['Nome'].setValue('');

    } else {
      this.usuarioForm.controls['Id'].setValue(String(this.selectedRow.id));
      this.usuarioForm.controls['Nome'].setValue(String(this.selectedRow.nome));
 

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

    let usuario = new UsuarioModel;
    usuario.nome = this.usuarioForm.controls['Nome'].value || '';

    // console.log(usuario);

    this.usuarioService.salvar(usuario).subscribe(usuario => {
      this.listar()
      alert(usuario.nome + " Gravado Com sucesso");
    });

  }

  listar() {
    this.usuarioService.listar().subscribe({
      next: (usuario) => this.dataSource = usuario,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  alterar() {
    let usuario = new UsuarioModel;
    usuario.id = Number(this.usuarioForm.controls['Id'].value);
    usuario.nome = this.usuarioForm.controls['Nome'].value || '';

    this.usuarioService.alterar(usuario).subscribe(usuario => {
      this.listar()
      alert(usuario.nome + " Alterado Com sucesso");
    });

  }
}
