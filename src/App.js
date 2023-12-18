import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Todo from "./components/Todo/Todo";
import Users from "./components/Users";
import Countdown from "./components/Countdown";
import Blogs from "./components/Blog/Blogs";
import DetailBlog from "./components/Blog/DetailBlog";

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
              <Route path="/Users" element={<Users />} />
              <Route path="/Todo" element={<Todo title={"All todos"} />} />
              <Route path="/Countdown" element={<Countdown />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/Blogs/:id" element={<DetailBlog />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
