import * as React from "react";
import { AppProps } from '../typesContainer';
import ConnectedAddButton from "../../connected/ConnectedAddTodoView";
import ConnectedNewTodoButton from "../../connected/ConnectedNewTodoButton";
import ConnectedTodosContainer from "../../connected/ConnectedTodosContainer";
import styles from "./App.module.css";
import { connect } from "react-redux";


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

const mapStateToProps = (state: State) => {
    return {
       isAddingTodo: state.isAddingTodo.isAddingTodo
     };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;


