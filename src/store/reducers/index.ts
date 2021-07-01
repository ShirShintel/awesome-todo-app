import { combineReducers } from 'redux';
import { IsAddingTodoReducer } from "./IsAddingTodoReducer";
import { TodoListReducer } from "./TodoListReducer";


export const RootReducer = combineReducers({
    isAddingTodo: IsAddingTodoReducer,
    todoList: TodoListReducer
  });