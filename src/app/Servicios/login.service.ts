import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url='http://localhost:8000/api/login/?';
regis='http://localhost:8000/api/';

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
  Registrar(user){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
     return this.http.post(this.regis + 'Persona/?',user,{ headers: headers});
  }
}

