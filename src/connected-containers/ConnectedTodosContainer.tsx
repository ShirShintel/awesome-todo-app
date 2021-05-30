import { State, Dispatch } from '../types';
import { connect } from 'react-redux';
import TodosContainer from '../containers/TodosContainer';
import { stat } from 'fs';


const mapStateToProps = (state:State) => {
    return {
        todoList: state.todoList.todoList
    }
};

const ConnectedTodosContainer = connect(mapStateToProps)(TodosContainer);

export default ConnectedTodosContainer;