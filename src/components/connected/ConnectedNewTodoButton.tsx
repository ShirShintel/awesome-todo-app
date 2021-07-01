import { connect } from 'react-redux';
import { Dispatch } from './types';
import NewTodoButton from '../pure/NewTodoButton'

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        startAddingHandler : () => dispatch({type: "SHOW"}
        )};
};

const ConnectedNewTodoButton = connect(null, mapDispatchToProps)(NewTodoButton);

export default ConnectedNewTodoButton;