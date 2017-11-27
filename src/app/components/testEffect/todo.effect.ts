import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';

import { TodosService } from './../../services/todos.service';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import * as Act from './todo.actions';
import * as TodoReducers from './todo.reducer';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoEffects {
    // Registering the 'todo$' property in the @ngrx/effects world
  // ==> @ngrx/effects will therefore watch this property and will
  // basically execute the code we assigin on the right side of it
  // depending on what conditions we define there
  // actions$ was injected in the constructor of our class. this is an Observable
  // that gives us information about all the actions we have in our application
  // and now we can simply watch for certain action occuring.
  @Effect() todo$ = this.action$.ofType(Act.TODO)
  .debug('just after => Act.TODO')
  // the 'ofType' method allow us to check if the action that is occuring is
  // of a certain type and will allow to continue the execution of the code
  // only if it is of the specified action type.
  // in this case we only want to execute the code when we are trying to signup (TODO)
    .map(toPayload)
    .debug('just after =>  .map(toPayload)')
    /* A return Action from “mergeMap” is an array. 
       So, you can return multiple actions that 
       you want just like this. */
    .mergeMap(payload => {
      return this.todoSrv.getTodos()
            .map(data => {
             return [
               new Act.TodoSuccess({ data: data })
             ]
           })
           .catch((error) => {
             return [
               new Act.TodoFail({ error: error })
             ]
           })
    })
    .debug('Just After  = mergeMap(payload => {')

  constructor(private action$: Actions,private http$: HttpClient, private todoSrv: TodosService) {}
  
}