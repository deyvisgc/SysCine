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

  verCarrito(id){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
    return this.httpclient.get(this.CrearPelicula + '/VerCarrito/' +id ,{headers: headers});
  }
  agregarCarrito(users){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
     return this.httpclient.post(this.CrearPelicula + '/agregarCarrito/?',users,{ headers: headers});
  }
  alquilarPelicula(users){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
     return this.httpclient.post(this.CrearPelicula + '/AlquilerPelicula/?',users,{ headers: headers});
  }
  temporar(id){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
    return this.httpclient.get(this.CrearPelicula + '/temporal/'+ id,{headers: headers});
  }
  detalle(id){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
    return this.httpclient.get(this.CrearPelicula + '/DetalleAlquiler/'+ id,{headers: headers});
  }
  agregarPelicula(pelicula){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
     });
     return this.httpclient.post(this.CrearPelicula + '/Registrar/?',pelicula,{ headers: headers});
  }
  reporte(){
    return this.httpclient.get(this.CrearPelicula + '/reporte');

  }
  reporte1(){
    return this.httpclient.get(this.CrearPelicula + '/reporte1');

  }
  sumatotal(){
    return this.httpclient.get(this.CrearPelicula + '/sumartotal');

  }
 

}


