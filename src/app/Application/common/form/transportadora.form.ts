import { FormControl, FormGroup, Validators } from '@angular/forms';

export const transportadoraForm = new FormGroup({
    Id: new FormControl({ value: '', disabled: true }),
    Nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Cnpj: new FormControl('', [Validators.required, Validators.minLength(14)]),
    Email: new FormControl('', [Validators.required, Validators.email,Validators.minLength(3)]),
    Ativado: new FormControl(true, [Validators.required])

  })