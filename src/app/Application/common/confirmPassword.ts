import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { FormGroup,FormControl, Validators } from '@angular/forms';

export const checkPasswords: ValidatorFn = (control: AbstractControl):  ValidationErrors | null => { 
    let Password = control.get('Password');
    let ConfirmPassword = control.get('ConfirmPassword');

    if(Password && ConfirmPassword && Password?.value != ConfirmPassword?.value){
      return {passwordmatcherror : true}
    }
    return null;
  }