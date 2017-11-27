import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/app.reducers';
import * as fromAuthentication from './components/authentication/store/authentication.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// import { loadState, saveState } from './localStorage';
import { Todo } from './components/testEffect/todo.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authenticationState: Observable<fromAuthentication.State>;
  todos: Observable<any>;
  title = 'app';
  
  constructor( private store: Store<fromApp.AppState>) {
    this.store.dispatch(new Todo);
    this.todos = store.select('todoSlice');
  }
  ngOnInit() {
      
         
  }
}
