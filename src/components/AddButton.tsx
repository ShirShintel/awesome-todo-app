import * as React from 'react';
import styles from './Components.module.css';
import appStyles from '../containers/App/App.module.css';


const AddButton: React.FC = (props) => {

    // exitButtonHandler = props.exitButtonHandler;

    return (
        <div>
            <div className={styles.head}>
            <h1 className= {appStyles.title}>Add Todo</h1>
            <button className={styles.exitButton}>X</button>
            </div>
            <form className={styles.form}>
                <div className={styles.div}>
                <label>
                    To-do
                    </label>
                    <input type="text" placeholder= "What needs to be done?"></input>
                </div>
                <button className= {styles.doneButton}>Done</button>
            </form>
        </div>
    );
};

export default AddButton;