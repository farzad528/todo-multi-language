import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  // State variables
  const [todos, setTodos] = useState([]);

  // Binding variables
  const todoText = useRef();

  // Lifecycle Hooks
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
  }
  return (
    <>
      <div className="container">
        <form onSubmit={addTodo}>
          <input
            type="text"
            ref={todoText}
            placeholder="what needs to be done?"
            className="textInput"
          
          />
          <input type="submit" value="Add ToDo" className="button" />
        </form>
      </div>
      <div className="list">
        <ul id="todos">
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
