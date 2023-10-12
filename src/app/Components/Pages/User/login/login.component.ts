import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm = new FormGroup({
    Email: new FormControl('',
    [
      Validators.required,Validators.email, Validators.minLength(3),Validators.maxLength(80),
    ]),
    PassWord: new FormControl('',
    [Validators.minLength(8),Validators.maxLength(25),
      Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")])
  })

  login(){
    console.log(this.LoginForm.controls['Email'].value);
    
  }

}
