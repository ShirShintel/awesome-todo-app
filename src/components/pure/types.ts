import { TodoType } from "../../types";

export interface NewTodoButtonProps {
    startAddingHandler: () => void;
}

export interface TodoProps {
    todo?: TodoType;
    deleteTodo: (id:number) => void;
    toggleChecked: (id:number) => void;
}