import React from "react";
import NavBar from "./nav_bar"
import MediaLinks from "./social_media";
const Header = () => {
    return (
        <div className="header">
            <MediaLinks />
            <h1>Cassandra Sibley</h1>
            <NavBar />
        </div>
    );
  };

export default Header;