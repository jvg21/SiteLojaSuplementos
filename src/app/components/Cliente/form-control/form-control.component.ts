import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {
  clienteFoRM = new FormGroup({
    name: new FormControl(''),
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

}
