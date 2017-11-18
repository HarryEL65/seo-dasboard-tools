import {
  AuthenticationActions,
} from '../../../../../.history/src/app/components/authentication/store/authentication.actions_20171118145238';
import { Actions, Effect } from '@ngrx/effects';
import { AuthenticationActions } from './authentication.actions';


export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType(AuthenticationActions).;

  constructor(private actions$: Actions) {}
}