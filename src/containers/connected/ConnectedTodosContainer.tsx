import { State } from '../types';
import { connect } from 'react-redux';
import TodosContainer from '../containers/TodosContainer';


const mapStateToProps = (state:State) => {
    return {
        todoList: state.todoList.todoList
    }
};

const ConnectedTodosContainer = connect(mapStateToProps)(TodosContainer);

export default ConnectedTodosContainer;