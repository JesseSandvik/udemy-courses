import React from "react";
import { Link } from "react-router-dom";

import classNames from "../utils/ClassNames";

function MenuBurger(props) {
    return (
        <header>
<div className="burger-btn" onClick={props.menuToggle}>
<span className={classNames({
    "burger-btn_menu": !props.menuIsOpen,
    "burger-btn_menu open": props.menuIsOpen
    })}></span>
    </div>
              <nav className={classNames({
                        "nav_burger": !props.menuIsOpen,
                        "nav_burger open": props.menuIsOpen
                        })}
                        >
              <ul className={classNames({
                    "nav_burger-menu": !props.menuIsOpen,
                    "nav_burger-menu open": props.menuIsOpen
                    })}
                    >
<li className={classNames({
    "nav_burger_item": !props.menuIsOpen,
    "nav_burger_item open": props.menuIsOpen
    })}>
  <Link to="/" className="nav_burger_link" onClick={props.menuToggle}>Home</Link>
  </li>
  <br></br>
  <li className={classNames({
    "nav_burger_item": !props.menuIsOpen,
    "nav_burger_item open": props.menuIsOpen
    })}>
      <Link to="/about" className="nav_burger_link" onClick={props.menuToggle}>About</Link>
      </li>
      <br></br>
      <li className={classNames({
    "nav_burger_item": !props.menuIsOpen,
    "nav_burger_item open": props.menuIsOpen
    })}>
          <Link to="/contact" className="nav_burger_link" onClick={props.menuToggle}>Contact</Link>
              </li>
              </ul>
              </nav>
              </header>
    );
}

export default MenuBurger;