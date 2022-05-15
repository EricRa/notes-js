import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="nav-container">
            <Link className="nav-item" to="/Home">Notes-js</Link>
            <Link className="nav-item" to="/About">About</Link>
            <Link className="nav-item" to="/Contact">Contact</Link>
    </nav>
    )

}

export default NavBar;