import  * as todoReduc from './todo.reducer';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo',
  template: `
      <div><span>{{todo.text}}</span><span>{{todo.status}}</span>
  `,
  styles: ['']
})
export class Todo implements OnInit {
  
  @Input() todo: todoReduc.Todo
  constructor() { }

  ngOnInit() {} ;
  
}