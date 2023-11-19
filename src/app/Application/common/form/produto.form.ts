import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

export const produtoForm = new FormGroup({
    Id: new FormControl({ value: '', disabled: true }),
    Nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Valor: new FormControl(0, [Validators.required, Validators.min(0)]),
    Peso: new FormControl(1, [Validators.required, Validators.min(0)]),
    MedidaPeso: new FormControl('',[Validators.required]),
    Marca: new FormControl('', [Validators.required]),
    Ativado: new FormControl(true, [Validators.required]),
    Url: new FormControl('', [Validators.required]),
    Descricao: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(200)]),

  })