import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroForm = new FormGroup({
    Id : new FormControl({value:'',disabled:true}),
    Nome : new FormControl('',[Validators.required]),
    Email : new FormControl('',[Validators.required]),
    Cpf : new FormControl('',[Validators.required]),
    Senha : new FormControl('',[Validators.required]),
    Csenha : new FormControl('',[Validators.required]),
    Uf : new FormControl('',[Validators.required]),
    Cidade : new FormControl('',[Validators.required]),
    Endereco : new FormControl('',[Validators.required]),
    Numero : new FormControl(null,[Validators.required]),
    Complemento : new FormControl(''),
    Cep : new FormControl('',[Validators.required]),

  });

  adicionar(){
    alert("oi")
  }
}



