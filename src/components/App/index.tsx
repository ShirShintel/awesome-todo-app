import * as React from "react";

import { ConnectedAddTodoView } from "../connected/ConnectedAddTodoView";

import { TodosView } from "../pure/todosView/todosView";

import { connect } from "react-redux";
import { State } from "../../types";

interface AppProps {
  AddingTodoView: boolean;
}

const App: React.FC<AppProps> = props => 
  props.AddingTodoView?<ConnectedAddTodoView/>:<TodosView/>;

const mapStateToProps = (state: State) => {
    return {
      AddingTodoView: state.isAddingTodo.isAddingTodo
     };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;


