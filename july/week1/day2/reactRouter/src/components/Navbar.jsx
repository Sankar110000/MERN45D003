import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink
        to={"/about"}
        style={({ isActive }) => (isActive ? {color: "red"} : {color:"blue"})}
      >
        About
      </NavLink>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
}

export default Navbar;
