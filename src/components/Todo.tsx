import * as React from 'react';
import styles from './Components.module.css';
import { TodoType, State, Dispatch } from '../types';
import { connect } from 'react-redux';


interface TodoProps {
    todo?: TodoType;
    deleteTodo: (id:number) => void;
}

interface TodoOwnProps {
    id: number;
}

const Todo: React.FC<TodoProps> = (props) => {
    if (!props.todo) {
        return <div></div>;
    }

    const {id, text, checked} = props.todo;

    // const deleteHandler = () => {
    //     props.deleteTodo(id);
    // }

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


const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
       deleteTodo: (id:number) => dispatch({type:"DELETE", key:id})
    }
}

const mapStateToProps = (state:State, ownProps: TodoOwnProps) => {
    return {
        todo: state.todoList.todoList.find((item) => item.id===ownProps.id)
    }
};

const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ConnectedTodo;