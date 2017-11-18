import { Actions, Effect } from '@ngrx/effects';
import { AuthenticationActions } from './authentication.actions';
import { AuthenticationActions}

export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType();

  constructor(private actions$: Actions){
    this
  }
}