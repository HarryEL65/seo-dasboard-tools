import { Actions, Effect } from '@ngrx/effects';

export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType();

  constructor(private actions$: Actions){
    this
  }
}