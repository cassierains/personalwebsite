import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/" className='navButton'>About</Link>
      </li>
      <li>
        <Link to="/resume" className='navButton'>Resume</Link>
      </li>
      <li>
        <Link to="/apps" className='navButton'>Apps</Link>
      </li>
      <li>
        <Link to="/projects" className='navButton'>Projects</Link>
      </li>
    </div>
  );
}

  export default NavBar;