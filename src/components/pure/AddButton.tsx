import * as React from 'react';
import { useState } from "react";
import { AddButtonProps } from './types';
import styles from './Components.module.css';
import appStyles from '../../containers/pure/App.module.css';

// Nir: The name "AddButton" is a little bit confusing, because I would expect it to be just a button,
// but it is the the form itself.
const AddButton: React.FC<AddButtonProps> = (props) => {

    const [todo,setTodo] = useState("");

    // Nir: There is an option to add empty todo, by typing space.
    // Using trim on the text and check it size could prevent it
    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        props.addTodo(todo);
        props.stopAddingHandler();
    };

    // Nir: cant comment in the css so writing here- hover with pointer cursor to any clickable item
    // is more visable.
    return (
        <div>
            <div className = {styles.head}>
                <h1 className = {appStyles.title}>
                    Add Todo
                </h1>
                <button className = {styles.exitButton} onClick = {props.stopAddingHandler}>
                    X
                </button>
            </div>
            <form className = {styles.form} onSubmit = {submitHandler}>
                <div className = {styles.div}>
                    <label>
                        To-do
                    </label>
                    <input type="text" value = {todo} onChange = {e => setTodo(e.target.value)} placeholder = "What needs to be done?" />
                </div>
                <button type = "submit" className = {todo?styles.doneButton:styles.disabled} disabled = {!todo}>
                    Done
                </button>
            </form>
        </div>
    );
};

export default AddButton;

