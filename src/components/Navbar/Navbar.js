import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            <nav className="navbar navbar-dark bg-dark " id="nav1">
            <div className="navDiv">
                <div className="navbar-brand" >React Portfolio</div>
                <Link to="#aboutMe">
                    <div className="navMenu" id="navAbout"> About</div>
                </Link>
                <Link to="#portfolio">
                    <div className="navMenu" href="#portSec" id="navPort">Portfolio</div>
                </Link>
                <Link to="#contact">
                <div className="navMenu" id="navContact">Contact</div>
                </Link>
                
            </div>
        </nav>
        </div>


        
    );
}

export default Navbar;
