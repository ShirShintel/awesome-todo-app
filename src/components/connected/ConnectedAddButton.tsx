import { connect } from 'react-redux';
import { Dispatch } from './types';
import  AddButton  from '../pure/AddButton';


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        stopAddingHandler: () => dispatch({type: "HIDE"}),
        addTodo: (value:string) => dispatch({type: "ADD", value: value})
    };
};

const ConnectedAddButton = connect(null, mapDispatchToProps)(AddButton);

export default ConnectedAddButton;