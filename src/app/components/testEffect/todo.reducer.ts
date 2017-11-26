import * as Actions from './todo.actions';

export interface Todo {
  text: string;
  status: string;
}

export interface TodoState {
  isLoading: boolean;
  isLoadedSuccessful: boolean;
  todos: Array<Todo>;    
}

export const initialState: TodoState = {
  isLoading: false,
  isLoadedSuccessful: false,                      
  todos: []
}


export function reducer(state=initialState,action: Actions.Action): TodoState{

  switch(action.type) {
    case Actions.TODO: {
        return {
          ...state,
          isLoading: true,
          isLoadedSuccessful: false,
          todos:[]
      }
    }
    case Actions.TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoadedSuccessful: true,
        todos: action.payload.data
      }
    }
    case Actions.TODO_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoadedSuccessful: false,
        todos: []
      }
    }
    default: {
      return state;
    }
  }

};