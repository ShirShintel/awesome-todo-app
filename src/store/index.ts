import { combineReducers, createStore } from 'redux';
import { State, Action,ReducerState, TodoType } from '../types';

const initialState:ReducerState = {
  isAddingTodo: false,
  todoList: []
}


const todoListReducer=(state:ReducerState = initialState,action:Action) => {
  let newState = {...state};
  if (action.type==="ADD"&&action.value) {
    newState.todoList.unshift({
      text: action.value,
      key: Math.random()
    });
    return newState;
  }
  return state;
  
}

const isAddingTodoReducer=(state:ReducerState = initialState,action:Action) => {
  let newState = {...state};
  switch(action.type) {
    case "SHOW":
      newState.isAddingTodo=true;
      return newState;
    case "HIDE":
      newState.isAddingTodo=false;
      return newState;
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  isAddingTodo: isAddingTodoReducer,
  todoList: todoListReducer
});


const store = createStore(rootReducer);

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;