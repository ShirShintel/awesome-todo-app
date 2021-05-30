import store  from './store'

//### General Types ###

export type TodoType = {
    text: string
    id: number
    checked: boolean
}

//### Props ###

export interface AddButtonProps {
    stopAddingHandler: () => void;
    addTodo: (s:string) => void;
};

export interface NewTodoButtonProps {
    startAddingHandler: () => void;
}

export interface TodoProps {
    todo?: TodoType;
    deleteTodo: (id:number) => void;
}

export interface AppProps {
    isAddingTodo: boolean
}

export interface TodosContainerProps {
    todoList:TodoType[];
};

export interface TodoOwnProps {
    id: number;
}

//### Connected Types ###

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

export type Dispatch = typeof store.dispatch; 