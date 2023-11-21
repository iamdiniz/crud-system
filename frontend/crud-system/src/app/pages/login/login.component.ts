import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginMessage: string;
  
  constructor(private router: Router, private shared: SharedService) {
    this.username= "";
    this.password= "";
    this.loginMessage= "";
  }

  btnLogin():void {

    if(this.username == "admin" && this.password == "admin") {
      this.loginMessage = "Login Successful";
      this.shared.setUsername("Guilherme Diniz");
      this.router.navigate(["home"])
    } else {
      this.loginMessage = "Login Failed";
    }

  }

}
