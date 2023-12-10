import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Todo from "./components/Todo/Todo";
import Post from "./components/Post";

// template + logic
// JSX
// babel

function App() {
  const [name, setName] = useState("LCD");

  const updateName = (newName) => {
    setName(newName);
  };
  // const [address, setAddress] = useState("");
  // const [todos, setTodos] = useState([
  //   { id: "todo1", title: "Watching Hoi Dan It Channel", type: "eric" },
  //   { id: "todo2", title: "Doing homework", type: "eric" },
  //   { id: "todo3", title: "Playing game", type: "hoidanit" },
  //   { id: "todo4", title: "Reading book", type: "hoidanit" },
  // ]);

  // const handleOnChangeInput = (event) => {
  //   setAddress(event.target.value);
  // };
  // const handleEventClick = (event) => {
  //   if (!address) {
  //     alert("Empty input");
  //     return;
  //   }
  // Hook not merge state
  // ...spread syntax array js
  //   let newTodo = {
  //     id: Math.floor(Math.random() * 100000 + 1),
  //     title: address,
  //     type: "eric",
  //   };
  //   setTodos([...todos, newTodo]);
  //   setAddress("");
  // };
  // const deleteDataTodo = (id) => {
  //   let currentTodos = todos;
  //   currentTodos = currentTodos.filter((item) => item.id !== id);
  //   setTodos(currentTodos);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>hello world with React and {name}!</h1>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home updateName={updateName} />} />
              <Route path="/Post" element={<Post />} />
              <Route path="/Todo" element={<Todo title={"All todos"} />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
