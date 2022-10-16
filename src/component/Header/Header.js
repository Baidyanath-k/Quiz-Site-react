import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='main-nav'>
            <div className="nav-logo">
                <h2>Quiz Show</h2>
            </div>
            <div className="nav-menu">
                <NavLink className={ ({isActive})=> isActive? 'active' :undefined } to='/'>Home</NavLink>
                <NavLink className={ ({isActive})=> isActive? 'active' :undefined } to='/Topics'>Topics</NavLink>
                <NavLink className={ ({isActive})=> isActive? 'active' :undefined } to='/Statics'>Statics</NavLink>
                <NavLink className={ ({isActive})=> isActive? 'active' :undefined } to='/Blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;