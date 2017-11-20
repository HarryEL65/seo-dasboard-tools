import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import * as fromAuth from '../components/authentication/store/authentication.reducers';
import * as fromApp from '../store/app.reducers'
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  isLoggedIn: boolean;
  constructor( private router: Router,
               private authService: AuthenticationService,
               private store: Store<fromApp.AppState>) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select('authenticationSlice')
    .map((authState: fromAuth.State) => {
      return authState.isAuthenticated;
    });
  }

  // tslint:disable-next-line:max-line-length
  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}
