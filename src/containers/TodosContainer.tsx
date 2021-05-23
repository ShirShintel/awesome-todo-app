import * as React from 'react';
import styles from './Container.module.css';
import Todo from '../components/Todo';
//import * as Image from '../utils/corgi.png';

const TodosContainer: React.FC = (props) => {


    const TodoList = React.useState([]);


    return (
        <div>
            {/* <img src={Image}/> */}
            <p className={styles.imgText}> Todos you add will appear here</p>
        </div>
    );
};

export default TodosContainer;