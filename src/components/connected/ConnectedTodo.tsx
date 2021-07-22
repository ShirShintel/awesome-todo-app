import { Dispatch, TodoOwnProps } from './types';
import { State } from '../../types';
import { connect } from 'react-redux';
import { Todo } from '../pure/todoComponent/Todo';


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
       deleteTodo: (id: number) => dispatch({type: "DELETE", key: id}),
       toggleChecked: (id: number) => dispatch({type: "CHECK", key: id})
    };
};

const mapStateToProps = (state: State, ownProps: TodoOwnProps) => {
    const todo = state.todoList.todoList.find(item => item.id === ownProps.id);
    if (!todo) {
        return {
            text: "",
            id: 1,
            checked: false
        };
    };
    return {
        text: todo?.text,
        id: todo?.id,
        checked: todo?.checked,
    };
};

const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ConnectedTodo;