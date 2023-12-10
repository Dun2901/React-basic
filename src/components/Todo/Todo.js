import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const { title } = props;
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

  const handleDelete = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="todos-container">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title} &nbsp; &nbsp;
              <span onClick={() => handleDelete(todo.id)}>X</span>
            </li>
          </div>
        );
      })}
      <hr />

      <input
        type="text"
        value={address}
        onChange={(event) => handleOnChangeInput(event)}
      />
      <button type="button" onClick={(event) => handleEventClick(event)}>
        Click me
      </button>
    </div>
  );
};

export default Todo;
