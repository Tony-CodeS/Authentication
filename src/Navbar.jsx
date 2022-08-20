import React, { Fragment } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar =()=>{
  const[active, setActive] = useState("nav_menu");
  const[toggleIcon, setToggleIcon] = useState('nav_toggler')

  const navToggle =()=>{
    active ==="nav_menu"? setActive('nav_menu nav_active'): setActive('nav_menu')
    toggleIcon === "nav_toggler"? setToggleIcon ("nav_toggler toggle") : setToggleIcon("nav_toggler")
  }
  return(
<Fragment>

 
  <nav className="nav">
  <div id="navbar-text"> REACT AUTHENTICATION BIOLER-PLATE</div>
      <ul className={active}>
        <li className="nav_item">
          <Link to="/" className="nav_link">Home</Link>
        </li>
        <li className="nav_item">
        <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav_item">
        <Link to="/Signup" className="nav_link">Signup</Link>
        </li>
      </ul>
      <div onClick={ navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
</Fragment>
  );
}

export default Navbar; 