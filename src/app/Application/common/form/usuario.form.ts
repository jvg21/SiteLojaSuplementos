import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checkPasswords } from '../confirmPassword';

export const cadastroForm = new FormGroup({
    Id: new FormControl({value:'',disabled:true}),
    Nome: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(80)]),
    Cpf: new FormControl('', [Validators.required, Validators.maxLength(14),Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    Uf: new FormControl('', [Validators.required]),
    Cidade: new FormControl('', [Validators.required]),
    Endereco: new FormControl('', [Validators.required]),
    Numero: new FormControl('', [Validators.required]),
    Complemento: new FormControl(''),
    Acesso: new FormControl(''),
    Cep: new FormControl('', [Validators.required,Validators.maxLength(14),Validators.pattern(/^\d{5}-\d{3}$/)]),
  }, {
    validators: checkPasswords
  })
