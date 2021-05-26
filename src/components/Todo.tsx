import * as React from 'react';
import styles from './Components.module.css';
import { TodoType } from '../types';

interface Props {
    todo: TodoType;
}

const Todo: React.FC<Props> = (props) => {


    return (
        <li key={props.todo.key} className={styles.todo}>
            <h2>{props.todo.text}</h2>
        </li>
    );
};


// const mapStateToProps = (state) => {
//     return {
//         text: state.todoList.text
//     }
// }


export default Todo;