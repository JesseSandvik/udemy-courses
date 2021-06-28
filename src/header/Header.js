import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from "../utils/ClassNames";

function Header() {
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => {
      if (setOpen(!open)) {
        return setOpen(true);
      } else {
        return setOpen(!open);
      }
    }
    
    return (
        <header>
                        <div className="burger-btn" onClick={handleToggle}>
                            <span className={classNames({
                                "burger-btn_menu": !open,
                                "burger-btn_menu open": open,
                                })}></span>
                                </div>
                                <nav className={classNames({
                                "nav": !open,
                                "nav open": open,
                                })}>
                                    <ul className={classNames({
                                        "nav-menu": !open,
                                        "nav-menu open": open,
                                        })}>
                    <li className={classNames({
                                        "nav-menu_item": !open,
                                        "nav-menu_item open": open,
                                        })}>
                        <Link to="/" className="nav-menu_link" onClick={handleToggle}>Home</Link>
                        </li>
                        <br></br>
                        <li className={classNames({
                                        "nav-menu_item": !open,
                                        "nav-menu_item open": open,
                                        })}>
                            <Link to="/about" className="nav-menu_link" onClick={handleToggle}>About</Link>
                            </li>
                            <br></br>
                            <li className={classNames({
                                        "nav-menu_item": !open,
                                        "nav-menu_item open": open,
                                        })}>
                                <Link to="/contact" className="nav-menu_link" onClick={handleToggle}>Contact</Link>
                                    </li>
                                    </ul>
                                    </nav>
                                    </header>
    );
}

export default Header;
