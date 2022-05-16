import React from "react";
import { Link } from "react-router-dom";
import newSvg from "../assets/svg/new.svg";

const MenuNav = () => {


    return (
        <nav className="menunav-container">
            <Link className="menunav-item" to="/">
                <img src={newSvg} alt="Create a new text file" />
            </Link>
            <Link className="menunav-item" to="/">Link 2</Link>
            <Link className="menunav-item" to="/">Link 3</Link>
    </nav>
    )

}

export default MenuNav;