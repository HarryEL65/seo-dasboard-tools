import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  isLoggedIn: boolean;
  constructor( private router: Router, private authService: AuthenticationService ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.getAuthentication().subscribe( auth => {
      auth ? this.isLoggedIn = true : this.isLoggedIn = false;
    });
    if ( !this.isLoggedIn) {
      this.router.navigate(['/login']);
    }else {
      this.router.navigate(['/']);
    }
    return  this.isLoggedIn;
  }

  // tslint:disable-next-line:max-line-length
  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}
