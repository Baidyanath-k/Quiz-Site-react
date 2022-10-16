import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='main-nav'>
            <div className="nav-logo">
                <h2>Quiz Show</h2>
            </div>
            <div className="nav-menu">
                <Link to='/'>Home</Link>
                <Link to='/Topics'>Topics</Link>
                <Link to='/Statics'>Statics</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;