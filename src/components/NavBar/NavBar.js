import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Post">Post</Link>
      <Link to="/Todo">Todo</Link>
    </nav>
  );
};

export default NavBar;
