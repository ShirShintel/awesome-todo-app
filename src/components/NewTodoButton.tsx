import * as React from 'react';
import styles from './Components.module.css';


interface Props {
    startAddingHandler: () => void;
}

const NewTodoButton: React.FC<Props> = (props) => {


    return (
        <button className={styles.newTodoButton} onClick={props.startAddingHandler}>+</button>
    );
};

export default NewTodoButton;