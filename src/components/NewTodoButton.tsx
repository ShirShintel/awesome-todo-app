import * as React from 'react';
import { connect } from 'react-redux';
import styles from './Components.module.css';
import {Dispatch} from '../types';


interface Props {
    startAddingHandler: () => void;
}

const NewTodoButton: React.FC<Props> = (props) => {
    return (
        <button className={styles.newTodoButton} onClick={()=>props.startAddingHandler()}>+</button>
    );
};


const mapDispatchToProps = (dispatch:Dispatch) => {
    return {startAddingHandler : () => dispatch({type:"SHOW"})}
};

export default connect(null,mapDispatchToProps)(NewTodoButton);
