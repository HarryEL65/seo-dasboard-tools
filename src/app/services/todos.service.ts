import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database/';
import { Todo } from './../components/testEffect/todo.reducer';

@Injectable()
export class TodosService {
  todosRef: AngularFireList<any>;
  todos: Observable<any>;
  todo: Observable<any>;

  constructor(private firebaseDB: AngularFireDatabase) {
    this.todosRef = this.firebaseDB.list('todos');
    this.todos = this.todosRef.snapshotChanges().map( changes => {
      return changes.map( c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }


  getTodos() {
    return this.todos;
  }
}
