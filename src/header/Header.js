import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from "../utlis/ClassNames";

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
                        <div className="menu-btn" onClick={handleToggle}>
                            <span className={classNames({
                                "menu-btn_burger": !open,
                                "menu-btn_burger open": open,
                                })}></span>
                                </div>
                                <nav className={classNames({
                                "nav": !open,
                                "nav open": open,
                                })}>
                                    <ul className={classNames({
                                        "menu-nav": !open,
                                        "menu-nav open": open,
                                        })}>
                    <li className={classNames({
                                        "menu-nav_item": !open,
                                        "menu-nav_item open": open,
                                        })}>
                        <Link to="/" className="menu-nav_link" onClick={handleToggle}>Home</Link>
                        </li>
                        <br></br>
                        <li className={classNames({
                                        "menu-nav_item": !open,
                                        "menu-nav_item open": open,
                                        })}>
                            <Link to="/about" className="menu-nav_link" onClick={handleToggle}>About</Link>
                            </li>
                            <br></br>
                            <li className={classNames({
                                        "menu-nav_item": !open,
                                        "menu-nav_item open": open,
                                        })}>
                                <Link to="/contact" className="menu-nav_link" onClick={handleToggle}>Contact</Link>
                                    </li>
                                    </ul>
                                    </nav>
                                    </header>
    );
}

export default Header;
