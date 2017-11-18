
import { Actions, Effect } from '@ngrx/effects';
import { AuthenticationActions } from './authentication.actions';


export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType(new AuthenticationActions.TRY_SIGNUP());

  constructor(private actions$: Actions) {}
}