import { TodoType } from "../../types";

// Nir: I think Show and Hide is more readable than Start and Stop
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