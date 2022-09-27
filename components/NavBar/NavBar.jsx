import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <p>Article Publisher</p>
      <div className="navbar_links">
        <Link to="/">HOME</Link>
        <Link to="/publish">PUBLISH</Link>
      </div>
    </div>
  );
};

export default NavBar;
