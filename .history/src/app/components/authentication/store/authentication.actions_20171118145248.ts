import { Action } from '@ngrx/store';

export const TRY_SIGN
export const SIGNUP    = 'SIGNUP';
export const LOGIN     = 'LOGIN';
export const LOGOUT    = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type = 
}
export class Signup implements Action {
  readonly type = SIGNUP;
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}

}

export type AuthenticationActions  =
    Signup |
    Login |
    Logout |
    SetToken;

