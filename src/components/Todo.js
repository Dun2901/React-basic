import React from "react";
import "../components/Todo.css";

const Todo = (props) => {
  // Properties
  // Parent => child, top => bottom
  const { title, todos, deleteDataTodo } = props;

  const handleDelete = (id) => {
    deleteDataTodo(id);
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
    </div>
  );
};

export default Todo;
