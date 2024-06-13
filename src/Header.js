import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Menu', url: '/menu' },
        { text: 'Reservation', url: '/reservation' },
        { text: 'Order Online', url: '/order' },
        { text: 'Login', url: '/login' },
    ];

    return (
        <header className='container'>
            <Link to="/">
                <img src="/logo.png" alt="Little Lemon Logo" />
            </Link>
            <nav>
                <ul>
                    {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header