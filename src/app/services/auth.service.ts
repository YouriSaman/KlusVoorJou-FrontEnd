import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginModel } from '../classes/user-login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://localhost:5001/api/auth"

  constructor(private http: HttpClient) { }

  login(user: UserLoginModel) {
    return this.http.post<string>(this.url + "/login", user);
  }
}
