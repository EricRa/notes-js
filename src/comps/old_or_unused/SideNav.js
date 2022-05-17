import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

    return (
        <nav className="menunav-container">
            <Link className="menunav-item" to="/"></Link>
            <Link className="menunav-item" to="/"></Link>
            <Link className="menunav-item" to="/"></Link>
    </nav>
    )

}

export default SideNav;