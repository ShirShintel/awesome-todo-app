import { State, Dispatch } from '../types';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

interface TodoOwnProps {
    id: number;
}


const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
       deleteTodo: (id:number) => dispatch({type:"DELETE", key:id})
    }
}

const mapStateToProps = (state:State, ownProps: TodoOwnProps) => {
    return {
        todo: state.todoList.todoList.find((item) => item.id===ownProps.id)
    }
};

const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ConnectedTodo;