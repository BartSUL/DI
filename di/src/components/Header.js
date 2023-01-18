import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Home page</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink to="/drawit">
                    <li>Draw it!</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Header;