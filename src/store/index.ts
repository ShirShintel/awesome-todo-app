import { combineReducers, createStore } from 'redux';
import { Action, ReducerState } from '../types';

const initialState:ReducerState = {
  isAddingTodo: false,
  todoList: [{text:"hi",id:1,checked:false}]
}

const todoListReducer=(state:ReducerState = initialState,action:Action) => {
  let newState = {...state};
  switch(action.type){
    case "ADD":
      if (action.value){
        newState.todoList.unshift({
          text: action.value,
          id: Math.random(),
          checked: false
          });
        return newState; 
      }
    case "DELETE":
      if (action.key){
        newState.todoList = newState.todoList.filter(todo => todo.id!==action.key)
        return newState;
      }
    default:
      return state;
  }
  
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

export type AppDispatch = typeof store.dispatch;

export default store;