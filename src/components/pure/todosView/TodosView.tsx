import React from 'react';
import ConnectedNewTodoButton from '../../connected/ConnectedNewTodoButton';

import { ConnectedTodosContainer } from '../../connected/ConnectedTodosContainer';

import styles from './TodosView.module.css';


export const TodosView: React.FC = () => 
    <div className={styles.root}>
        <div className={styles.head}>
            <h1>Todos</h1>
            <ConnectedTodosContainer />
        </div>
        <ConnectedNewTodoButton />
    </div>;
