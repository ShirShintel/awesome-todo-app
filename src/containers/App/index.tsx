import * as React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import AddButton from '../../components/AddButton';
import NewTodoButton from '../../components/NewTodoButton';
import TodosContainer from '../TodosContainer';


const App: React.FC = () => {

    const [isAddingTodo,setIsAdding] = useState(false);

    const [todoList,setTodos] = useState<string[]>([]);


    const startAddingHandler = () => {
        setIsAdding(true);
    }


    const stopAddingHandler = () => {
        setIsAdding(false);
    }

    const addTodo = (todo:string) => {
        const newList = [todo,...todoList];
        setTodos(newList);
        
    }


    if (isAddingTodo){
        return (<AddButton stopAddingHandler={stopAddingHandler} addTodo={addTodo} />);
    }
    else{
    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <h1>Todos</h1>
                <TodosContainer todoList={todoList} />
            </div>
            <NewTodoButton startAddingHandler={startAddingHandler} />
        </div>
    );
    }
};

export default App;