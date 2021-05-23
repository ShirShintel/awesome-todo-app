import * as React from 'react';
import styles from './Components.module.css';


const NewTodoButton: React.FC = () => {


    const clickHandler = () => {

    }


    return (
        <button className={styles.newTodoButton} onClick={clickHandler}>+</button>
    );
};

export default NewTodoButton;