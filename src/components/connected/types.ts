import store from "../../store";
import { TodoType } from "../../types";

export type Dispatch = typeof store.dispatch;

export interface ReducerState {
    isAddingTodo: boolean,
    todoList: TodoType[],
}

export interface State {
    isAddingTodo: ReducerState,
    todoList: ReducerState,
}

export interface TodoOwnProps {
    id: number;
}