import * as React from 'react';
import styles from './Components.module.css';

interface Props {
    text: string;
}

const Todo: React.FC<Props> = (props) => {


    return (
        <div className={styles.todo}>
            <h2>{props.text}</h2>
        </div>
    );
};

export default Todo;