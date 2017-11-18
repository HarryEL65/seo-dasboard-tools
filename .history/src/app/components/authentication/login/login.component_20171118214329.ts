import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages/module';
import { AuthenticationService } from '../../../services/authentication.service';
import { AppState } from '../../../store/app.reducers';
import * as fromApp from '../../../store/app.reducers';
import * as AuthActions from '../store/authentication.actions';
import { Login } from '../store/authentication.actions';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogin(form) {
    // this.authService.login(this.email, this.password)
    //   .then( (res) => {
    //     console.log(res);
    //     // this._flashMessagesService.show('Logged In succeded', {
    //     //   cssClass: 'alert-success', timeout: 4000
    //     // });
    //     this.router.navigate(['/']);
    //   })
    //   .catch( (err) => {
    //     console.log(err.message);
    //     // this._flashMessagesService.show( err.message, {
    //     //   cssClass: 'alert-danger', timeout: 4000
    //     // });
    //     this.router.navigate(['/login']);
    //   });
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.tryLogin({username: email, password: password}));

  }

}
