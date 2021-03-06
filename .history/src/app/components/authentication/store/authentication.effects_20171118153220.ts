
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from './authentication.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/oprerator/switchMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';


export class AuthentificationEffects {
  @Effect()
  authSignup = this.actions$
   .ofType(AuthActions.TRY_SIGNUP)
   .map((action: AuthActions.TrySignup) => {
     return action.payload;
   })
   .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
   })
   .switchMap(() => {
       return fromPromise(firebase.auth().currentUser.getIdToken());
   })
   .mergeMap((token: string)) => {
     return {
       {
         type: AuthActions.SIGNUP
       }
     };
   }

  constructor(private actions$: Actions) {}
}
