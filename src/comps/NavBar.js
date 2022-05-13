import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="nav-container">
            <Link className="nav-item" to="/">link 1</Link>
            <Link className="nav-item" to="/">link 2</Link>
            <Link className="nav-item" to="/">link 3</Link>
    </nav>
    )

}

export default NavBar;