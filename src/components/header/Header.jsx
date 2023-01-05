import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ user }) => {
    return (
        <nav className='header'>

            <h1>hello world</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>

                <Link to="/about">Blog</Link>
                <Link to="/contact">Contact</Link>
                {
                    user ? <Link to="/">{user.displayName}</Link> :

                        <Link to="/login" className='login-btn'>Login</Link>
                }

            </div>
        </nav>
    );
};

export default Header;