import React from "react";

function Footer () {
    return (
        <footer>

        </footer>
    );
};

import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Testimonials from "./Testimonials";
const Footer = () => {
    return(
        <div className ="footer">
            <img src="/logoLL.png" alt="LittleLemonLogo"></img>
            <ul>
                <li><Link to ="/#header" aria-label="Home">Home</Link></li>
                <Routes>
                    <Route path="/#header" element={<Header />} />
                </Routes>
                <li><Link to="/#about" aria-label="About us">About us</Link></li>
                <Routes>
                    <Route path="/#about"  element={<About />} />
                </Routes>
                <li><Link to="/#testimonials">Testimonials</Link></li>
                <Routes>
                    <Route path="/#testimonials" element={<Testimonials />} />
                </Routes>
                <li><Link to="/bookingpage" aria-label="Reservations">Reservation</Link></li>
                <li><a href="#">Lorem</a></li>
                <li><a href="#">Ipsum</a></li>
                <li><a href="#">sit</a></li>
                <li><a href="#">Amet</a></li>
            </ul>
            <ul>
                <li><a href="#">Dolor</a></li>
                <li><a href="#">Lorem</a></li>
                <li><a href="#">ispum</a></li>
                <li><a href="#">sit</a></li>
            </ul>
            <ul className="last-footer-child">
                <li><a href="#">amet</a></li>
                <li><a href="#">Dolor</a></li>
                <li><a href="#">loreem</a></li>
                <li><a href="#">iipsum</a></li>
            </ul>
        </div>
    )
}

export default Footer;