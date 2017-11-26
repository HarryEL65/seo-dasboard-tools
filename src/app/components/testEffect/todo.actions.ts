import { Action } from '@ngrx/store';

export const TODO = 'TODO';
export const TODO_SUCCESS = 'TODO_SUCCESS';
export const TODO_FAIL = 'TODO_FAIL';

export class Todo implements Action{
  readonly type = TODO;

  constructor() {}
}

export class TodoSuccess implements Action {
  readonly type = TODO_SUCCESS;

  constructor( public payload: any ){}
}

export class TodoFail implements Action {
  readonly type = TODO_FAIL;

  constructor( public payload: any ){}
}

export type Action = Todo |
                     TodoSuccess |
                     TodoFail