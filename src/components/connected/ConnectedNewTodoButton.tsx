import { connect } from 'react-redux';
import { Dispatch } from './types';
import NewTodoButton from '../pure/NewTodoButton'

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        startAddingHandler : () => dispatch({type: "SHOW"}
        )};
};

// Nir: I would remove the 'Connected' from the name of the component
const ConnectedNewTodoButton = connect(null, mapDispatchToProps)(NewTodoButton);

export default ConnectedNewTodoButton;