import * as React from 'react';
import { connect } from 'react-redux'
import styles from './Container.module.css';
import Todo from '../components/Todo';
import {State, TodoType} from '../types';

        
interface Props {
    todoList:TodoType[];

};

const TodosContainer: React.FC<Props> = (props) => {

    const imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEG2x3hiFfopMlhCs9f50VX8WQpZvCGe7_g&usqp=CAU";
    const todoList = props.todoList;
    


    if (todoList.length>0){
        return <ul>{todoList.map(todo =>
        <Todo todo={todo}/>)}</ul>;
    }
    else{
        return (
            <div>
                <img src={imgSrc}/>
                <p className={styles.imgText}> Todos you add will appear here</p>
            </div>
        );
    }
};

const mapStateToProps = (state:State) => {
    return {
        todoList: state.todoList.todoList
    }
};


export default connect(mapStateToProps)(TodosContainer);
