import { Effect } from '@ngrx/effects';

export class AuthentificationEffects {
  @Effect()
  authSignup;

  constructor(private actions$: Actions)
}