import * as React from 'react';
import styles from './Components.module.css';
import { TodoProps } from '../types';


const Todo: React.FC<TodoProps> = (props) => {
    if (!props.todo) {
        return <div></div>;
    }

    const {id, text, checked} = props.todo;
    const checkmark = <span>&#10003;</span>


    return (
        <li key={id} className={checked?styles.checkedTodo:styles.todo}>
            <div className={styles.todoDiv}>
                <button className={checked?styles.checkedDeleteButton:styles.deleteButton} onClick={()=>props.deleteTodo(id)}>X</button>
                <button className={checked?styles.checkedCheckBox:styles.checkBox} onClick={()=>props.toggleChecked(id)}>{checked?checkmark:""}</button>
            </div>
            <h2 className={checked?styles.checkedText:""}>{text}</h2>
        </li>
    );
};

export default Todo;