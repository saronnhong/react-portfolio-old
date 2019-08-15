import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-sm" id="nav1">
                {/* <div className="navDiv ">

                    <Link smooth to="/react-portfolio">
                        <div className="navbar-brand" ><i class="far fa-address-card"></i> Saron Nhong</div>
                    </Link>

                    <Link smooth to="/react-portfolio/#contact">
                        <div className="navMenu" id="navContact">Contact</div>
                    </Link>
                    <Link smooth to="/react-portfolio/portfolio">
                        <div className="navMenu" href="#portSec" id="navPort">Portfolio</div>
                    </Link>

                    <Link smooth to="/react-portfolio/#aboutMe">
                        <div className="navMenu" id="navAbout"> About</div>
                    </Link>


                </div> */}
                <Link smooth to="/react-portfolio">
                    <div className="navbar-brand" ><i class="far fa-address-card"></i> Saron Nhong</div>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link smooth to="/react-portfolio/#aboutMe">
                                <div className="navMenu" id="navAbout"> About</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="/react-portfolio/portfolio">
                                <div className="navMenu" href="#portSec" id="navPort">Portfolio</div>
                            </Link>
                        </li>

                        <li class="nav-item active">
                            <Link smooth to="/react-portfolio/#contact">
                                <div className="navMenu" id="navContact">Contact</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>



    );
}

export default Navbar;
