import * as React from "react";
import styles from "./App.module.css";
import ConnectedAddButton from "../../connected-components/ConnectedAddButton";
import ConnectedNewTodoButton from "../../connected-components/ConnectedNewTodoButton";
import ConnectedTodosContainer from "../../connected-containers/ConnectedTodosContainer";
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

