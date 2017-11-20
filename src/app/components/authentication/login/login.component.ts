import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages/module';
import { AuthenticationService } from '../../../services/authentication.service';

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

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {}

  onLogin(form) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TryLogin({username: email, password: password}));
  }

}
