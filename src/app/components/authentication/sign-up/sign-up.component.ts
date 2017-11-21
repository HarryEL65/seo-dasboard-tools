import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../../../services/authentication.service';
import * as fromApp from '../../../store/app.reducers';
import * as AuthActions from '../store/authentication.actions';
import { TRY_SIGNUP, TrySignup } from '../store/authentication.actions';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'seo-tls-dbrd-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // Dispatching the "TrySignup" action ==> the 'AuthentificationEffects' will
    // handle this action
    this.store.dispatch(new AuthActions.TrySignup({username: email, password: password}));
  }
}
