import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css';
import logo from '../../images/logo.png'
const Header = ({ user }) => {



    console.log(user.displayName)

    return (
        <nav className='header'>

            <img src={logo} alt="" className='logo' />
            <div>
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>

                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                {
                    user.displayName ? <Link to="/profile" >{user.displayName}</Link> :

                        <Link to="/login" className='login-btn'>Login</Link>
                }

            </div>
        </nav>
    );
};

export default Header;