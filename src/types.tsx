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
    key?: number
  } 

export type TodoType = {
    text: string
    id: number
    checked: boolean
}

export type Dispatch = typeof store.dispatch; 