import { ActionReducerMap } from '@ngrx/store';
// this is the main STORE application that bundles all the other reducers (slices) of the application

import * as fromAuthentication from '../components/authentication/store/authentication.reducers';

export interface AppState {
  // authentication store/slice
  authenticationSlice: fromAuthentication.State;
  // TODO: add other slices here
}

 export const reducers: ActionReducerMap<AppState> = {
    // authentication store/slice
  authenticationSlice: fromAuthentication.authenticationReducer
  // TODO: add other slices here
 };

