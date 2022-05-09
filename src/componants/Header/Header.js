import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/productdetails">Inventory-Items</Link>
            </nav>
            <nav>

                <Link to="/manageinventory">Manage-Inventory</Link>
                <Link to="/myitems">My-Items</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/login">LogIn</Link>

            </nav>
        </div>
    );
};

export default Header;