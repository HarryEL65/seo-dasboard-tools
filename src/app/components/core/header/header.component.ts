// tslint:disable-next-line:import-blacklist
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FlashMessagesService } from 'angular2-flash-messages/module';

import { AuthenticationService } from '../../../services/authentication.service';
import * as fromApp from './../../../store/app.reducers';
import * as fromAuthentication from '../../authentication/store/authentication.reducers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  loggdedInUser: string;
  showRegister: boolean;

  authenticationState: Observable<fromAuthentication.State>;

  constructor( private authService: AuthenticationService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authenticationState = this.store.select('authenticationSlice');
    this.authService.getAuthentication().subscribe( auth => {
      if ( auth ) {
        this.isLoggedIn = true;
        this.loggdedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();

    // this._flashMessagesService.show('you are logged out', {
    //   cssClass: 'alert-success', timeout: 4000
    // });
    this.router.navigate(['/login']);
  }


}
