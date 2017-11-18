
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from './authentication.actions';



export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType(AuthActions.TRY_SIGNUP)
   .map((action: AuthActions.TrySignup) => {
     return action.payload;
   })
   .switchMap;

  constructor(private actions$: Actions) {}
}