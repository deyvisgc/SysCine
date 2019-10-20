import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './Servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService : LoginService,
    private _router : Router
  ){}

  canActivate():boolean
  {
    if(this._authService.loggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(['/logeo']);
      return false;
    }
  }

  
}
