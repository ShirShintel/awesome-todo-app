import * as React from "react";

import ConnectedAddButton from "../../connected/ConnectedAddTodoView";

import { TodosView } from "../todosView/todosView";

import { connect } from "react-redux";
import { State } from "../../../types";

interface AppProps {
  AddingTodoView: boolean;
}

const App: React.FC<AppProps> = props => 
  props.AddingTodoView?<ConnectedAddButton/>:<TodosView/>;

const mapStateToProps = (state: State) => {
    return {
       isAddingTodo: state.isAddingTodo.isAddingTodo
     };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;


