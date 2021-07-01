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
    toggleChecked: (id:number) => void;
}

export interface AppProps {
    isAddingTodo: boolean
}

export interface TodosContainerProps {
    todoList:TodoType[]
};



//### Connected Types ###





export interface Action {
    type: string
    value?: string
    key?: number
}

