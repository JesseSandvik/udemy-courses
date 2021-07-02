import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    
    return (
        <header>
          <nav className="nav">
                                    <ul className="nav-menu">
                    <li className="nav-menu_item">
                        <Link to="/" className="nav-menu_link">Home</Link>
                        </li>
                        <br></br>
                        <li className="nav-menu_item">
                            <Link to="/about" className="nav-menu_link">About</Link>
                            </li>
                            <br></br>
                            <li className="nav-menu_item">
                                <Link to="/contact" className="nav-menu_link">Contact</Link>
                                    </li>
                                    </ul>
                                    </nav>
                                    </header>
    );
}

export default Header;
