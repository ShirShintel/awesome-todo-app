//### General Types ###

export type TodoType = {
    text: string
    id: number
    checked: boolean
}

//### Props ###







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

