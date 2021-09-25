import React, { useState } from "react";
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

//This is a function
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Roger's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
