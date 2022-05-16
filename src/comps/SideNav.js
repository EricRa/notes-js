import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

    return (
        <nav className="menunav-container">
            <Link className="menunav-item" to="/">Notes-js</Link>
            <Link className="menunav-item" to="/">About</Link>
            <Link className="menunav-item" to="/">Contact</Link>
    </nav>
    )

}

export default SideNav;