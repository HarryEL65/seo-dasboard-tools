import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as AuthActions from './authentication.actions';
// tslint:disable-next-line:import-blacklist
// import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';

import { fromPromise } from 'rxjs/observable/fromPromise';

import { AngularFireAuth } from 'angularfire2/auth';

import { SET_TOKEN } from './authentication.actions';

@Injectable()
export class AuthentificationEffects {
  // Registering the 'authSignup' property in the @ngrx/effects world
  // ==> @ngrx/effects will therefore watch this property and will
  // basically execute the code we assigin on the right side of it
  // depending on what conditions we define there
  // actions$ was injected in the constructor of our class. this is an Observable
  // that gives us information about all the actions we have in our application
  // and now we can simply watch for certain action occuring.
  @Effect()
  authSignup = this.actions$
  // the 'ofType' method allow us to check if the action that is occuring is
  // of a certain type and will allow to continue the execution of the code
  // only if it is of the specified action type.
  // in this case we only want to execute the code when we are trying to signup (TRY_SIGNUP)
   .ofType(AuthActions.TRY_SIGNUP)
   .debug('AuthActions.TRY_SIGNUP - debug')
  // So the furthers operators we chain here will only get executed if the
  // 'TRY_SIGNUP' action is dispatched from anywhere in our application
  // As in any reducer the relevant action will be handled here,
  // the big difference is that we don't change our application state anywhere in this process.
  // We just do something else: we are handling side effects.

  // reacting to 'TrySingup' action
  // ==>in this case extracting the payload of the action.
  // due to the nature of the map opertator this will be wrapped into a new
  // observable so that we can chains more observable operators after map.
   .map((action: AuthActions.TrySignup) => {
     return action.payload;
   })
  // the next thing I want to do here is to use firbase to 'try' and 'Sign' the user 'up' (TrySingup).
  // 'switchMap' map will get ever returned in the previous map operation
  // in this case this the action payload containing the authentication data (authData)
  // of type {username: string, password: string}
   .switchMap((authData: {username: string, password: string}) => {
     // At the end we need to return a new Observable because the @Effect Decorator
     // expect to get an observable.
     // since firebase return a promise and not an Observable (and we have to stick to the expected return value)
     // we have to convert our firebase Promise into an Observable.
     // The rxjs library provides a convenient method wich allow to do the conversion.
      return fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(authData.username, authData.password));
   })
  //  .debug('map - action: AuthActions.TrySignup')
   // The following chaine switchMap will be called whenever the previous one return a value
   // but since we are not interested in its value switchMap(() => .....)
   // we want to dispatch an action and to fetch the token
   .switchMap(() => {
       return fromPromise(this.afAuth.auth.currentUser.getIdToken());
   })
   // This time we care about the value ( it will be the token string )
   // And now I can return a special object wich will be handle by the @njrx/effects package
   // the mergMap will allow me to merge multiple actions into one.
   // and I can now return an array of javascripts objects whish will all be merged together
   // or actually be sent back as Observables  wich will be handle by the @njrx/effects.
   // At the end of an Effect we typicallt dispatching actions that will be handled by a reducer.
   // Just as a note: if we don't dispatch an action we can add a configuration to the @Effect({dispatch: false})
   // decorator. This may occur when we have an effect that don't yield/emit an action
   .mergeMap((token: string) => {
     return [
       {
         type: AuthActions.SIGNUP
       },
       {
          type: AuthActions.SET_TOKEN,
          payload: token
       }
     ];
   });

   @Effect()
   authLogin = this.actions$
    .ofType(AuthActions.TRY_LOGIN)
    .debug('just after => .ofType(AuthActions.TRY_LOGIN)')
    .map((action: AuthActions.TryLogin) => {
      return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(this.afAuth.auth.signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(this.afAuth.auth.currentUser.getIdToken());
    })
    // .debug('just after => .switchMap(()')
    .mergeMap( (token: string ) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.LOGIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

    @Effect({dispatch: false})
    authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .debug('just after => AuthActions.LOGOUT')
    .do(() => {
      this.router.navigate(['/login']);
    })
    .debug('just after => this.router.navigate([/login])');


 // add a private property 'actions$' of type 'Actions' from the @ngrx/effects
 // this will enable us to access the actions we have registered in out Store.
 // to be able to do so we also will have to register the 'EffectsModule'
 // (EffectsModule.forRoot([AuthentificationEffects]))  in our app.module
 // where we also have the 'StoreModule'

 constructor(private actions$: Actions, private router: Router, private afAuth: AngularFireAuth) {}
}
