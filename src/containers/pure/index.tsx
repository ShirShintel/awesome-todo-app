import * as React from "react";
import styles from "./App.module.css";
import ConnectedAddButton from "../../components/connected/ConnectedAddButton";
import ConnectedNewTodoButton from "../../components/connected/ConnectedNewTodoButton";
import ConnectedTodosContainer from "../connected/ConnectedTodosContainer";
import { AppProps } from '../../types';


const App: React.FC<AppProps> = (props) => {

  if (props.isAddingTodo) {
    return (
        <ConnectedAddButton/>
    );
  } else {
    return (
        <div className={styles.root}>
            <div className={styles.head}>
            <h1>Todos</h1>
            <ConnectedTodosContainer />
            </div>
            <ConnectedNewTodoButton />
        </div>
    );
  }
};

export default App;

