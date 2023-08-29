import React, { useState } from "react";
import { Link } from "react-scroll";
import transparent from "./Image/transparent.png"

function Navbar() {

    const [nav, setnav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className="logo">

                <img src={transparent} alt="logo" />
            </Link>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>


            <ul className="menu">
                <li><Link to="main" smooth={true} duration={1000}>Home</Link></li>
                <li><Link to="presentaion" smooth={true} duration={1000}>Service</Link></li>
                <li><Link to="feature" smooth={true} duration={1000}>Team</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>Gallery</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;