import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public inputType: string = "password";

  loginForm = new FormGroup({
    Email: new FormControl('',
    [
      Validators.required,Validators.email,Validators.maxLength(80),
    ]),
    PassWord: new FormControl('',
    [
      Validators.required,Validators.minLength(8),Validators.maxLength(20),
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,16}$/) // a senha deve conter um numero, uma letra maiuscula e um caractere especial
    ])
  })

  togglePasswordVisibility() {
    this.inputType == 'text'?this.inputType='password':this.inputType='text'
  }

  login(){
    console.log(this.loginForm.controls['Email'].value);
    
  }

}
