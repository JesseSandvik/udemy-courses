import React from "react";
import { Link } from "react-router-dom";

import classNames from "../utils/ClassNames";

function DynamicHeaderMenu(props) {
    return (
        <header>
        <nav className={classNames({
            "nav": !props.openBackground,
            "nav open": props.openBackground
            })}>
                <ul className={classNames({
                    "nav-menu": !props.openBackground,
                    "nav-menu open": props.openBackground
                    })}>
<li className={classNames({
                    "nav-menu_item": !props.openBackground,
                    "nav-menu_item open": props.openBackground
                    })}>
    <Link to="/" onClick={props.backgroundToggle}
                 className={classNames({
                    "nav-menu_link": !props.openBackground,
                    "nav-menu_link open": props.openBackground,
                    })}>
                        Home</Link>
    </li>
    <br></br>
    <li className={classNames({
                    "nav-menu_item": !props.openBackground,
                    "nav-menu_item open": props.openBackground
                    })}>
        <Link to="/about" onClick={props.backgroundToggle}
                 className={classNames({
                    "nav-menu_link": !props.openBackground,
                    "nav-menu_link open": props.openBackground,
                    })}>About</Link>
        </li>
        <br></br>
        <li className={classNames({
                    "nav-menu_item": !props.openBackground,
                    "nav-menu_item open": props.openBackground
                    })}>
            <Link to="/projects" onClick={props.backgroundToggle}
                 className={classNames({
                    "nav-menu_link": !props.openBackground,
                    "nav-menu_link open": props.openBackground,
                    })}>Projects</Link>
                </li>
        <li className={classNames({
                    "nav-menu_item": !props.openBackground,
                    "nav-menu_item open": props.openBackground
                    })}>
            <Link to="/contact" onClick={props.backgroundToggle}
                 className={classNames({
                    "nav-menu_link": !props.openBackground,
                    "nav-menu_link open": props.openBackground,
                    })}>Contact</Link>
                </li>
                </ul>
                </nav>
                </header>
    );
}

export default DynamicHeaderMenu;