
import { ExpandOperator } from 'rxjs/operators/expand';
import { Action } from '@ngrx/store';

// for the TRY_SIGNUP we don't need to register a reducer for it because we 
// don't want to update the state  in this case. We only need this action 
// for the Effects
export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP    = 'SIGNUP';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN     = 'LOGIN';
export const TRY_LOGOUT = 'TRY_LOGOUT';
export const LOGOUT    = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) {}
}
export class Signup implements Action {
  readonly type = SIGNUP;

  // constructor(public payload: {username: string, password: string}) {}
}

export class TryLogin implements Action {
  readonly type = TRY_LOGIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  // constructor(public payload: {username: string, password: string}) {}
}

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
    TryLogin |
    Login |
    // TryLogout |
    Logout |
    SetToken;

