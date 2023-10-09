import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  clienteForm = new FormGroup({
    nome: new FormControl(''),
    sobreNome: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    cep: new FormControl(''),
    uf: new FormControl(''),
    cidade: new FormControl(''),
    logradouro: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    
  });


  salvar() {
    console.log(this.clienteForm.controls['nome'].value);
  }

}
