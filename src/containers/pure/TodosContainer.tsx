import * as React from 'react';
import styles from './Container.module.css';
import ConnectedTodo from '../connected-components/ConnectedTodo';
import { TodosContainerProps } from '../types';

  
const TodosContainer: React.FC<TodosContainerProps> = (props) => {

    const imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEG2x3hiFfopMlhCs9f50VX8WQpZvCGe7_g&usqp=CAU";
    const checkedList = props.todoList.filter(todo => todo.checked);
    const checkedListComp = <React.Fragment><hr></hr><ul>{checkedList.map(todo =><ConnectedTodo id={todo.id} />)}</ul></React.Fragment>;
    const todoList = props.todoList.filter(todo => !todo.checked);
    const todoListComp = <ul>{todoList.map(todo =><ConnectedTodo id={todo.id} />)}</ul>;
    

    if (todoList.length>0 && checkedList.length>0){
        return <React.Fragment>{todoListComp}{checkedListComp}</React.Fragment>;
    }
    
    else if (todoList.length>0){
        return todoListComp;
    }

    else if (checkedList.length>0){
        return checkedListComp;
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
