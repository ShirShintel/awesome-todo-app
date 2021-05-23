import * as React from 'react';
import styles from './App.module.css';
import NewTodoButton from '/Users/shirsh/Desktop/awesome-todo-app/awesome-todo-app/src/components/NewTodoButton';
import TodosContainer from '/Users/shirsh/Desktop/awesome-todo-app/awesome-todo-app/src/containers/TodosContainer';


const App: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>Todos</h1>
            <TodosContainer/>
            <NewTodoButton/>
        </div>
    );
};

export default App;