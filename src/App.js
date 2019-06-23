import React from 'react';
import ToDoItem from './components/ToDoItem';
import './styles/style.css';
import todosData from './components/todosData';

function App() {

  const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)

  return (
    <div className="todo-list">
      {todoItems}
    </div>
    
  );
}

export default App;
