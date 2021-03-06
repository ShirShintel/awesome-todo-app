import { Action, ReducerState } from '../../types';
import { initialState } from '../initialState';

  
export const IsAddingTodoReducer=(state: ReducerState = initialState, action: Action) => {
    let newState = {...state};
    switch(action.type) {
      case "SHOW":
        newState.isAddingTodo = true;
        return newState;
      case "HIDE":
        newState.isAddingTodo = false;
        return newState;
      default:
        return state;
    }
  }
  
