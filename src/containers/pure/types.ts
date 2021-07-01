import { TodoType } from "../../types";

export interface TodosContainerProps {
    todoList: TodoType[]
};

export interface AppProps {
    isAddingTodo: boolean
}