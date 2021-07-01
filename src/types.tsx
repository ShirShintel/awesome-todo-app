//### General Types ###

export type TodoType = {
    text: string
    id: number
    checked: boolean
}

export interface ReducerState {
    isAddingTodo: boolean,
    todoList: TodoType[],
}

export interface State {
    isAddingTodo: ReducerState,
    todoList: ReducerState,
}

//### Props ###







export interface AppProps {
    isAddingTodo: boolean
}





//### Connected Types ###





export interface Action {
    type: string
    value?: string
    key?: number
}

