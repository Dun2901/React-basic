import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Users">Users</NavLink>
      <NavLink to="/Todo">Todo</NavLink>
      <NavLink to="/Countdown">Countdown</NavLink>
      <NavLink to="/Blogs">Blogs</NavLink>
    </nav>
  );
};

export default NavBar;
