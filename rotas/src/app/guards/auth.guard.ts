import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.usuarioEstaAutenticado()) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}