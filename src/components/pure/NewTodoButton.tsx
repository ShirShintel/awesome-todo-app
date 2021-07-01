import * as React from 'react';
import styles from './Components.module.css';
import { NewTodoButtonProps } from '../types';


const NewTodoButton: React.FC<NewTodoButtonProps> = (props) => {
    return (
        <button className={styles.newTodoButton} onClick={()=>props.startAddingHandler()}>+</button>
    );
};

export default NewTodoButton;