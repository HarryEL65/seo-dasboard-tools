import { Actions, Effect } from '@ngrx/effects';

export class AuthentificationEffects {
  @Effect()
  authSignup = this.action

  constructor(private actions$: Actions){
    this
  }
}