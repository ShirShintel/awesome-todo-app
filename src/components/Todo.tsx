import * as React from 'react';
import styles from './Components.module.css';
import { TodoProps } from '../types';


const Todo: React.FC<TodoProps> = (props) => {
    if (!props.todo) {
        return <div></div>;
    }

    const {id, text, checked} = props.todo;

    return (
        <li key={id} className={styles.todo}>
            <div className={styles.todoButtons}>
                <button className={styles.deleteButton} onClick={()=>props.deleteTodo(id)}>X</button>
                {/* <button className={styles.checkBox}></button> */}
            </div>
            <h2>{text}</h2>
        </li>
    );
};

export default Todo;