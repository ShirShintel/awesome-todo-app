
export type TodoType = {
    text: string
    id: number
    checked: boolean
}

// Nir: not sure if it is reducer state, maybe TodoListState
export interface ReducerState {
    isAddingTodo: boolean,
    todoList: TodoType[],
}

export interface State {
    isAddingTodo: ReducerState,
    todoList: ReducerState,
}

export interface Action {
    type: string
    value?: string
    key?: number
}

