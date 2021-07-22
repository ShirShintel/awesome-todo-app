import { connect } from 'react-redux';
import { State } from '../../types';
import { TodosContainer } from '../pure/todosContainer/TodosContainer';


const mapStateToProps = (state: State) => {
    return {
        todoList: state.todoList.todoList
    };
};

export const ConnectedTodosContainer = connect(mapStateToProps)(TodosContainer);
