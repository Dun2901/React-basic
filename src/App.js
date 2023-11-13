import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Post from "./components/Post";

// template + logic
// JSX
// babel

function App() {
  const [name, setName] = useState("LCD");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching Hoi Dan It Channel", type: "eric" },
    { id: "todo2", title: "Doing homework", type: "eric" },
    { id: "todo3", title: "Playing game", type: "hoidanit" },
    { id: "todo4", title: "Reading book", type: "hoidanit" },
  ]);

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    // Hook not merge state
    // ...spread syntax array js
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "eric",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello world with React and {name}!</h1>
        <Post />

        {/* <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter((item) => item.type === "eric")}
          title={"Eric todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button> */}
      </header>
    </div>
  );
}

export default App;
