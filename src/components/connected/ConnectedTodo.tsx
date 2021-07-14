import { Dispatch, TodoOwnProps } from './types';
import { State } from '../../types';
import { connect } from 'react-redux';
import Todo from '../pure/Todo';


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
       deleteTodo: (id: number) => dispatch({type: "DELETE", key: id}),
       toggleChecked: (id: number) => dispatch({type: "CHECK", key: id})
    };
};

const mapStateToProps = (state: State, ownProps: TodoOwnProps) => {
    return {
        todo: state.todoList.todoList.find((item) => item.id === ownProps.id)
    };
};
const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ConnectedTodo;