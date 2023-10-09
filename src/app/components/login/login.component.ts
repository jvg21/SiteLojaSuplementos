import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  salvar() {
    console.log(this.LoginForm.controls['user'].value);
  }
}
