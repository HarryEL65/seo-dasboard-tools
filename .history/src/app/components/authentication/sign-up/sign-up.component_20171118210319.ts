import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../../../services/authentication.service';
import { AppState } from '../../../store/app.reducers';
import * as fromApp from '../../../store/app.reducers';

import * as AuthActions from '../store/authentication.actions';
import { TRY_SIGNUP, TrySignup } from '../store/authentication.actions';


@Component({
  selector: 'app-sign-up',
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
    this.store.dispatch(new AuthActions.TrySignup({username: email, password: password}));
}

}