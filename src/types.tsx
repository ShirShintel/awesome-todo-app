import store  from './store'

export interface State {
    isAddingTodo: ReducerState,
    todoList: ReducerState
}

export interface ReducerState {
    isAddingTodo: boolean,
    todoList: TodoType[] 
}

export interface Action {
    type: string
    value?: string
  } 

export type TodoType = {
    text: string,
    key: number
}

export type Dispatch = typeof store.dispatch; 