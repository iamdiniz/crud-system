import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginMessage: string;
  
  constructor(private router: Router) {
    this.username= "";
    this.password= "";
    this.loginMessage= "";
  }

  btnLogin():void {

    if(this.username == "admin" && this.password == "admin") {
      this.loginMessage = "Login Successful";
      this.router.navigate(["home"])
    } else {
      this.loginMessage = "Login Failed";
    }

  }

}
