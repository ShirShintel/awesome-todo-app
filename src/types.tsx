
export interface ReducerState {
    isAddingTodo: boolean;
    todoList: {
        text: string;
        id: number;
        checked: boolean;
        }[];
}

export interface State {
    isAddingTodo: ReducerState;
    todoList: ReducerState;
}

export interface Action {
    type: string;
    value?: string;
    key?: number;
}

