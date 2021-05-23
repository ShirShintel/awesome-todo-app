// import * as React from 'react';
// import styles from './App.module.css';
// import AddButton from '../../components/AddButton';
// import NewTodoButton from '../../components/NewTodoButton';
// import TodosContainer from '../TodosContainer';


// const App: React.FC = () => {

//     const [isAddingTodo,setIsAdding] = React.useState(true);

//     const newButtonHandler = () => {
//         setIsAdding(true);
//     }


//     const exitButtonHandler = () => {
//         setIsAdding(false);
//     }


//     if (isAddingTodo){
//         return (<AddButton exitButtonHandler={exitButtonHandler}/>);
//     }
//     else{
//     return (
//         <div className={styles.root}>
//             <div className={styles.head}>
//             <h1>Todos</h1>
//                 <TodosContainer/>
//             </div>
//             <NewTodoButton newButtonHandler={newButtonHandler} />
//         </div>
//     );
//     }
// };

// export default App;