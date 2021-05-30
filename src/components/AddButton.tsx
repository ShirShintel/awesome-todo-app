import * as React from 'react';
import { useState } from "react";
import styles from './Components.module.css';
import appStyles from '../containers/App/App.module.css';
import { AddButtonProps } from '../types';


const AddButton: React.FC<AddButtonProps> = (props) => {

    const [todo,setTodo] = useState("");

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        props.addTodo(todo);
        props.stopAddingHandler();
    }

    return (
        <div>
            <div className={styles.head}>
            <h1 className= {appStyles.title}>Add Todo</h1>
            <button className={styles.exitButton} onClick={props.stopAddingHandler}>X</button>
            </div>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.div}>
                <label>
                    To-do
                    </label>
                    <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder= "What needs to be done?"></input>
                </div>
                <button type="submit" className= {todo?styles.doneButton:styles.disabled} disabled={!todo}>Done</button>
            </form>
        </div>
    );
};

export default AddButton;

