import * as AuthActions from './authentication.actions';
import { SET_TOKEN } from './authentication.actions';

export interface State {
  appToken: string;
  isAuthenticated: boolean;
  // email: string;
}

const initialState: State = {
  appToken: null,
  isAuthenticated: false,
  // 1email: ''
};

export function authenticationReducer(state = initialState, action: AuthActions.AuthenticationActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.LOGIN):
       return {
          ...state,
          isAuthenticated: true
          // email: action.payload.username
       };
    case (AuthActions.LOGOUT):
       return {
           ...state,
           appToken: null,
           isAuthenticated: false
          //  email: ''
      };
    case (AuthActions.SET_TOKEN):
      return {
          ...state,
          appToken: action.payload,
          isAuthenticated: true
     };
    default:
      return state;
  }
}
