import * as AuthActions from './authentication.actions';
import { SET_TOKEN } from './authentication.actions';

export interface State {
  appToken: string;
  isAuthenticated: boolean;
}

const initialState: State = {
  appToken: null,
  isAuthenticated: false
};

export function authenticationReducer(state = initialState, action: AuthActions.AuthenticationActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.LOGIN):
       return {
          ...state,
          isAuthenticated: true
       };
    case (AuthActions.LOGOUT):
       return {
           ...state,
           appToken: null,
           isAuthenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
          ...state,
          appToken: action.payload,
          isAuthenticated: false
     };
    default:
      return state;
  }
}
