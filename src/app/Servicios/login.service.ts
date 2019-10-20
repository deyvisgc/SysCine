import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url='http://localhost:8000/api/login/?';

  constructor(private http: HttpClient) {
    
   }

  loginUser(user)
{
  return this.http.post<any>(this.url,user);
}
removeToken()
  {
    return localStorage.removeItem("token");
  }
  loggedIn()
  {
    return !!localStorage.getItem("token");
  }

  getToken()
  {
    return localStorage.getItem("token");
  }
}

