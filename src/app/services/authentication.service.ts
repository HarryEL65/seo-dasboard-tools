import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
// tslint:disable-next-line:import-blacklist
import { FireBaseUserProfile } from '../models/fire-base-user-profile';
import * as FromApp from '../store/app.reducers';
import * as AuthActions from '../components/authentication/store/authentication.actions';
import { AuthenticationActions } from '../components/authentication/store/authentication.actions';


@Injectable()
export class AuthenticationService {

  appToken: string;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private store: Store<FromApp.AppState>) { }

    login( email: string, password: string ) {
      return new Promise((resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then(
            response => {
              this.store.dispatch(new AuthActions.Login());
              this.router.navigate(['']);
              this.afAuth.auth.currentUser.getIdToken()
                .then(
                  (token: string) => {
                    console.log(`======= token is: =============`, token );
                    // return this.appToken = token;
                    this.store.dispatch(new AuthActions.SetToken(token));
                  }
                );
            }
          ).
          catch(
            err => console.log(err)
          );
      });
    }
    logout() {
      this.afAuth.auth.signOut();
      this.store.dispatch(new AuthActions.Logout());
    }
    signupUser( email: string, password: string) {
      return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then(
            // userData => resolve(userData),
            // err => reject(err)
            user => this.store.dispatch(new AuthActions.Signup())
        );
      });
    }
    getAuthentication() {
      return this.afAuth.authState.map( auth => auth );
    }
    updateProfile(basicProfileInfo) {
      const user = this.afAuth.auth.currentUser;
      user.updateProfile({
        displayName: basicProfileInfo.displayName,
        photoURL: basicProfileInfo.photoURL
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
    getCurrentUserProfile(): any {
      const user = this.afAuth.auth.currentUser;
      let profile;
      // let profile = {
      //   displayName: '',
      //   email:       '',
      //   phoneNumber: '',
      //   photoURL:    '',
      //   providerId:  '',
      //   password:    '',
      //   uid:         ''
      // };

      if (user != null) {
        user.providerData.forEach( function (user_profile) {
          console.log('Sign-in provider: ' + user_profile.providerId);
          console.log('  Provider-specific UID: ' + user_profile.uid);
          console.log('  Name: ' + user_profile.displayName);
          console.log('  Email: ' + user_profile.email);
          console.log('  Photo URL: ' + user_profile.photoURL);
          profile =  user_profile;
        });
      }
      return profile;
    }

}
