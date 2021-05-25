import * as React from 'react';
import styles from './Container.module.css';
import Todo from '../components/Todo';

interface Props {
    todoList:string[];

};

const TodosContainer: React.FC<Props> = (props) => {

    const todoList = props.todoList;
    const todoListComp = <ul>{todoList.map(todo =>
        <Todo text={todo}></Todo>)}</ul>;


    if (todoList.length>0){
        return todoListComp;
    }
    else{
        return (
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEG2x3hiFfopMlhCs9f50VX8WQpZvCGe7_g&usqp=CAU"/>
                <p className={styles.imgText}> Todos you add will appear here</p>
            </div>
        );
    }
};

export default TodosContainer;