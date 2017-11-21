import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/app.reducers';
import * as fromAuthentication from './components/authentication/store/authentication.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authenticationState: Observable<fromAuthentication.State>;
  title = 'app';
  constructor( private store: Store<fromApp.AppState>) {}
  ngOnInit() {
      this.authenticationState = this.store.select('authenticationSlice');
  }
}
