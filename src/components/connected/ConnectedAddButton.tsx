import { connect } from 'react-redux';
import { Dispatch } from './types';
import  AddButton  from '../pure/AddButton';


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        stopAddingHandler: () => dispatch({type: "HIDE"}),
        addTodo: (value:string) => dispatch({type: "ADD", value: value})
    };
};

// Nir: I would remove the 'Connected' from the name of the component
const ConnectedAddButton = connect(null, mapDispatchToProps)(AddButton);

export default ConnectedAddButton;