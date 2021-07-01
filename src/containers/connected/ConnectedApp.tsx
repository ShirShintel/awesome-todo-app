import { connect } from "react-redux";
import { State } from '../../types';
import App from '../pure/index';


const mapStateToProps = (state:State) => {
    return {
       isAddingTodo: state.isAddingTodo.isAddingTodo
     };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;