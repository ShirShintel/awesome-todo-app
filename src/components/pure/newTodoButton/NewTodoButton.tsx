import * as React from 'react';
import { NewTodoButtonProps } from '../types';
import styles from './Components.module.css';



const NewTodoButton: React.FC<NewTodoButtonProps> = (props) => {
    return (
        <button className = {styles.newTodoButton} onClick = {() => props.startAddingHandler()}>
            +
        </button>
    );
};

export default NewTodoButton;