import * as React from 'react';

import styles from './NewTodoButton.module.css';

interface NewTodoButtonProps {
    startAddingHandler: () => void;
}

const NewTodoButton: React.FC<NewTodoButtonProps> = (props) => {
    return (
        <button className = {styles.newTodoButton} onClick = {() => props.startAddingHandler()}>
            +
        </button>
    );
};

export default NewTodoButton;