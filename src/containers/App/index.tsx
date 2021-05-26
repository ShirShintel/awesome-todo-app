import * as React from "react";
import styles from "./App.module.css";
import AddButton from "../../components/AddButton";
import NewTodoButton from "../../components/NewTodoButton";
import TodosContainer from "../TodosContainer";
import { connect } from "react-redux";
import { State } from '../../types';


interface Props {
    isAddingTodo: boolean
}


const App: React.FC<Props> = (props) => {

  if (props.isAddingTodo) {
    return (
        <AddButton/>
    );
  } else {
    return (
        <div className={styles.root}>
            <div className={styles.head}>
            <h1>Todos</h1>
            <TodosContainer />
            </div>
            <NewTodoButton />
        </div>
    );
  }
};


const mapStateToProps = (state:State) => {
    console.log(state);
    return {
       isAddingTodo: state.isAddingTodo.isAddingTodo
     };
};




export default connect(mapStateToProps)(App);

