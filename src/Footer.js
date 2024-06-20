import React from "react";
import logo from './assest/logo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} width={256} alt="Little Lemon Logo" />

        <div className="footer-content">
          <div className="navigation">
            <h3>Navigate</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservations">Reservations</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <p>123 Main Street</p>
            <p>Chicago, IL 60601</p>
            <p>(312) 555-1212</p>
            <p>info@littlelemon.com</p>
          </div>

          <div className="social-media">
            <h3>Social Media Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservations">Reservations</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              {/* Add other social media links in a similar way */}
            </ul>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
        &copy;2024 Little Lemon - Abubakr Alsheikh
      </div>
    </footer>
  );
};

export default Footer;
