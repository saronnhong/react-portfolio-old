import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            <nav className="navbar navbar-dark bg-dark fixed-top" id="nav1">
                <div className="navDiv">
                    <Link smooth to="/">
                        <div className="navbar-brand" ><i class="far fa-address-card"></i> Saron Nhong</div>
                    </Link>

                    <Link smooth to="/#contact">
                        <div className="navMenu" id="navContact">Contact</div>
                    </Link>
                    <Link smooth to="/portfolio">
                        <div className="navMenu" href="#portSec" id="navPort">Portfolio</div>
                    </Link>

                    <Link smooth to="/#aboutMe">
                        <div className="navMenu" id="navAbout"> About</div>
                    </Link>
                </div>
            </nav>
        </div>



    );
}

export default Navbar;
