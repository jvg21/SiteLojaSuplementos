import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm = new FormGroup({
    FirstName : new FormControl(''),
    LastName : new FormControl(''),
    Email : new FormControl(''),
    Contact : new FormControl(''),
    Cpf : new FormControl(''),
    PassWord : new FormControl(''),
    CpassWord : new FormControl(''),
    UF : new FormControl(''),
    City : new FormControl(''),
    Address : new FormControl(''),
    AddressNumber : new FormControl(''),
    Complement : new FormControl(''),
    Cep : new FormControl(''),

  })

  cadastrar(){
    
  }
  

}
