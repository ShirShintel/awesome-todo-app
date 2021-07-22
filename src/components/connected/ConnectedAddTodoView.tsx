import { connect } from 'react-redux';
import { Dispatch } from './types';
import  { AddTodoView }  from '../pure/addTodoView/AddTodoView';


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        stopAddingHandler: () => dispatch({type: "HIDE"}),
        addTodo: (value:string) => dispatch({type: "ADD", value: value})
    };
};

export const ConnectedAddTodoView = connect(null, mapDispatchToProps)(AddTodoView);
