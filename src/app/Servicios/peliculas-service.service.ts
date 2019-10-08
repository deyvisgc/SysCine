import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServices {
  CrearPelicula = 'http://localhost:8000/api';
  constructor(private httpclient:HttpClient) { }

  getPelicula(){
    return this.httpclient.get(this.CrearPelicula + '/Pelicula');
   }
   listar(id){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
    return this.httpclient.get(this.CrearPelicula + '/listar/'+ id,{headers: headers});
  }
  selectUser(){
    return this.httpclient.get(this.CrearPelicula + '/allUser');
  }
  Alquiler(users){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
     return this.httpclient.post(this.CrearPelicula + '/agregarCarrito/?',users,{ headers: headers});
  }
 

}


