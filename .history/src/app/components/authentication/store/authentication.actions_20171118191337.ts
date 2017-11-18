import { TIMEOUT } from 'dns';
import { ExpandOperator } from 'rxjs/operators/expand';
import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP    = 'SIGNUP';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN     = 'LOGIN';
export const TRY_LOGOUR = 'TRY_LOGOUT';
export const LOGOUT    = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) {}
}
export class Signup implements Action {
  readonly type = SIGNUP;
}

export class TrySignin implements Action {
  readonly type = TRY_LOGIN;

  constructor(public payload: {username: string, passsword: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;
}

ex
export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}

}

export type AuthenticationActions  =
    TrySignup |
    Signup |
    Login |
    Logout |
    SetToken;

