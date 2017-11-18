import { Actions, Effect } from '@ngrx/effects';
import { Authentication}

export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType();

  constructor(private actions$: Actions){
    this
  }
}