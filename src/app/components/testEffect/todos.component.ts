import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todos',
  template: `
  <pre>todos:  {{ todos | json }}
  <div *ngFor="let todo of todos"></div>
  `,
  styles: ['']
})
export class Todos implements OnInit {
  @Input() todos: Observable<any>;
  error: any[]; 
  constructor(private TodosService: TodosService) { }

  ngOnInit() {
    // this.TodosService.getTodos().subscribe( todos => this.todos = todos,
    // err => {
    //   // error handling
    //   this.error = err.code + err.message;
    // });
  }
}