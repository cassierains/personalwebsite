import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/" className='navButton'>About</Link>
      </li>
      <li>
        <Link to="/Resume" className='navButton'>Resume</Link>
      </li>
      <li>
        <Link to="/WebApps" className='navButton'>Apps</Link>
      </li>
      <li>
        <Link to="/Projects" className='navButton'>Projects</Link>
      </li>
    </div>
  );
}

  export default NavBar;