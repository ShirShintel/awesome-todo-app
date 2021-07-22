import * as React from 'react';

import styles from './Components.module.css';

export interface TodoProps {
    text: string;
    id: number;
    checked: boolean;
    deleteTodo: (id: number) => void;
    toggleChecked: (id: number) => void;
}

export const Todo: React.FC<TodoProps> = (props) => {

    const {id, text, checked} = props;
    const checkmark = <span> &#10003; </span>;

    return (
        <li key = {id} 
        className = {checked ? styles.checkedTodo : styles.todo}>
            <div className = {styles.todoDiv}>
                <button 
                className = {checked ? styles.checkedDeleteButton : styles.deleteButton} 
                onClick = {() => props.deleteTodo(id)}>
                    X
                </button>
                <button 
                className = {checked ? styles.checkedCheckBox : styles.checkBox} 
                onClick = {() => props.toggleChecked(id)}>
                    {checked?checkmark:""}
                </button>
            </div>
            <h2 className = {checked ? styles.checkedText : ""}>
                {text}
            </h2>
        </li>
    );
};