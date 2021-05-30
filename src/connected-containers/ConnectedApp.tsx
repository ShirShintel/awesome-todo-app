import { connect } from "react-redux";
import { State } from '../types';
import App from '../containers/App/index'



const mapStateToProps = (state:State) => {
    console.log(state);
    return {
       isAddingTodo: state.isAddingTodo.isAddingTodo
     };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;