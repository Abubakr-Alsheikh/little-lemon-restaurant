import React from 'react'
import Nav from './Nav'

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
            {/* Assuming you have a logo image named "logo.png" in your public folder */}
            <img src="/logo.png" alt="Little Lemon Logo" />
            <Nav navLinks={navLinks} />
        </header>
    )
}

export default Header