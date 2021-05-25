import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserLoginModel } from 'src/app/classes/user-login-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserLoginModel = new UserLoginModel("", "");
  token: string = "";
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.authService.login(this.user).subscribe(
      data => {
        this.token = data;
        console.log(this.token);
      }, 
      err => {
        console.log(err);
      }
    );
  }
}
