import { connect } from 'react-redux';
import { State } from '../../types';
import TodosContainer from '../pure/todosView/TodosView';


const mapStateToProps = (state: State) => {
    return {
        todoList: state.todoList.todoList
    };
};

const ConnectedTodosContainer = connect(mapStateToProps)(TodosContainer);

export default ConnectedTodosContainer;