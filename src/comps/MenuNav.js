import React from "react";
import { Link } from "react-router-dom";
import newSvg from "../assets/svg/new.svg";
import openSvg from "../assets/svg/open.svg";
import saveSvg from "../assets/svg/save.svg";

const MenuNav = () => {


    return (
        <nav className="menunav-container">
            <Link className="menunav-item" to="/">
                <img src={newSvg} style={{ height: 85, width: 25 }} title="Create a new text file" alt="icon of an empty page" />
            </Link>
            <Link className="menunav-item" to="/">
                <img src={openSvg} style={{ height: 85, width: 25 }} title="Open a text file" alt="icon of a folder" />
            </Link>
            <Link className="menunav-item" to="/">
                <img src={saveSvg} style={{ height: 85, width: 25 }} title="Save the current file" alt="icon of a disk" />
            </Link>
    </nav>
    )

}

export default MenuNav;