import React, { useState } from "react";
import { FaBars, FaInstagram, FaFacebook} from "react-icons/fa";
import logo from './cccp.jpg';
import "./navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className="navbar-social">
          <a href="https://www.instagram.com/cccpmarket/" target="_blank">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.facebook.com/CCCPMarket/" target="_blank">
            <FaFacebook size={40} />
          </a>
        </div>
      </div>
      <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" style={{ height: "100px", alignItems: 'center', marginLeft: "50%" }} />
        </a>
      <div className={`navbar-right ${showMenu ? "show" : ""}`}>
        <a href="/products">Our Products</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
