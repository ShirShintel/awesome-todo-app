import { ReducerState, Action } from "../../types";
import { initialState } from "../initialState";

// Nir: Action creator using Any Action
export const TodoListReducer = (state: ReducerState = initialState, action: Action) => {
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
        };
      case "DELETE":
        if (action.key){
          newState.todoList = newState.todoList.filter(todo => todo.id !== action.key)
          return newState;
        };
      case "CHECK":
        if (action.key){
          let toBeChecked = newState.todoList.find(todo => todo.id === action.key)
          newState.todoList = newState.todoList.filter(todo => todo.id !== action.key)
          if(toBeChecked){
            const text = toBeChecked.text;
            const id = toBeChecked.id;
            const checked = !toBeChecked.checked;
            newState.todoList.unshift({
              text: text,
              id: id,
              checked: checked
              });
          }
          return newState;
        };
      default:
        return state;
    };
  };