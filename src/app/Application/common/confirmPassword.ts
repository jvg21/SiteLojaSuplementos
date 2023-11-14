import { AbstractControl, ValidationErrors } from "@angular/forms";
import { FormGroup,FormControl, Validators } from '@angular/forms';

checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value || '';
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }