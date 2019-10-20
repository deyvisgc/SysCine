import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../Servicios/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
      //  localStorage.setItem("token",res.data.api_key);
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
