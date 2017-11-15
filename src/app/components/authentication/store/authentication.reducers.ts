  import * as AuthActions from './authentication.actions';

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
           token: null,
           isAuthenticated: false
      };
    default:
      return state;
  }
}
