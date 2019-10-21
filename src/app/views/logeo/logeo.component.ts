import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../Servicios/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.scss']
})
export class LogeoComponent implements OnInit {
  err_message : string;

  loginUserData = {
    email : '',
    password : ''
  };
  user:Users={
    email: null,
    password:null,
    api_key: null,
    Nombre: null,
    Apellidos:null,
    Dni:null,
    Telefono:null,
    Direccion: null,
    Rol:null,
    Usuario_idUsuario:null,
  }
  constructor( private _auth:LoginService,
    private _router : Router,) { 
      this._auth.removeToken();
    
  }
  @ViewChild('myModal', {static: false}) public myModal: ModalDirective;

  ngOnInit() {
  }
  RegistrarUser(){
    this.myModal.show();
  }
  RegisUser(){
    this._auth.Registrar(this.user).subscribe((data:Users[])=>{
   
     Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Registrado Correctamente',
      showConfirmButton: false,
      timer: 1500
    });
       this.myModal.hide();
    })
    console.log(this.user);
    this.myModal.hide();
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
       localStorage.setItem("token",res.api_key);
        this._router.navigate(["/dashboard"]);
      },
      err => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'sus credenciales no coninciden',
          footer: '<a href>Why do I have this issue?</a>'
        })
        this.err_message = err.error.message;
      },
    );
  }
}
