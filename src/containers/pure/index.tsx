import * as React from "react";
import { AppProps } from './types';
import ConnectedAddButton from "../../components/connected/ConnectedAddTodoView";
import ConnectedNewTodoButton from "../../components/connected/ConnectedNewTodoButton";
import ConnectedTodosContainer from "../connected/ConnectedTodosContainer";
import styles from "./App.module.css";


const App: React.FC<AppProps> = (props) => {

  if (props.isAddingTodo) {
    return (
        <ConnectedAddButton/>
    );

  } else {
    return (
        <div className = {styles.root}>
            <div className = {styles.head}>
              <h1>Todos</h1>
              <ConnectedTodosContainer />
            </div>
            <ConnectedNewTodoButton />
        </div>
    );
  };
};

export default App;

