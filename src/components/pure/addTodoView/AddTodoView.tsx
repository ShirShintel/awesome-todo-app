/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { useState } from "react";
import { AddButtonProps } from '../types';
import { ExitButton } from '../exitButton/ExitButton';

import styles from './Components.module.css';
import appStyles from '../../containers/pure/App.module.css';


export const AddTodoView: React.FC<AddButtonProps> = (props) => {

    const [input,setCurrentInput] = useState("");

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();
        props.addTodo(input);
        props.stopAddingHandler();
    };

    return (
        <div>
            <div className = {styles.head}>
                <h1 className = {appStyles.title}>
                    Add Todo
                </h1>
                <ExitButton onClick = {props.stopAddingHandler}/>
            </div>
            <form 
                className = {styles.form} 
                onSubmit = {submitHandler}>
                <div className = {styles.div}>
                    <label>
                        To-do
                    </label>
                    <input 
                        type="text" 
                        value = {input} 
                        onChange = {e => setCurrentInput(e.target.value)} 
                        placeholder = "What needs to be done?" />
                </div>
                <button 
                    type = "submit" 
                    className = {input?styles.doneButton:styles.disabled} 
                    disabled = {!input}>
                    Done
                </button>
            </form>
        </div>
    );
};
