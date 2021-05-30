import * as React from 'react';
import styles from './Container.module.css';
import ConnectedTodo from '../connected-components/ConnectedTodo';
import { TodosContainerProps } from '../types';

  
const TodosContainer: React.FC<TodosContainerProps> = (props) => {

    const imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEG2x3hiFfopMlhCs9f50VX8WQpZvCGe7_g&usqp=CAU";
    const todoList = props.todoList;
    console.log(todoList);
    

    if (todoList.length>0){
        return <ul>{todoList.map(todo =>
        <ConnectedTodo id={todo.id} />)}</ul>;
    }
    
    else{
        return (
            <div>
                <img src={imgSrc}/>
                <p className={styles.imgText}> Todos you add will appear here</p>
            </div>
        );
    }
};

export default TodosContainer;
