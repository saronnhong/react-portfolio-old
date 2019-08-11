

import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { BrowserRouter, Router, Link } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        


        {/* <Link smooth to="#aboutMe2">Link to Hash Fragment (#portSec)</Link> */}


        <div className="aboutMe" id="aboutMe">
          <div className="container">

            <div className="row">
              <div className="col-md-8">
                <div className="introText">
                  Hi! My name is
            </div>
                <div className="nameText">
                  Saron Nhong.
              </div>
                <div className="quoteText">
                  "Aspire To Inspire Before You Expire." - unknown
            </div>
              </div>
              <div className="col-md-4 circular">
                <img className="circle" src="img/crabs.jpg"></img>
              </div>
            </div>
            <div className="row emptyRow">
              <div className="col-md-9">
                <div className="introText">
                  I am Web Developer with strong skills in HTML, CSS, and Javascript. I have a strong desire to continue to learn new things and find great satisfaction in solving complicated problems. My previous career as a Software Test Engineer allowed me to understand the hard work it takes to put out quality software. Excited to have software testing skills alongside development skills to have a deeper involvement in building out applications.
              </div>
              </div>
            </div>
          </div>


        </div>
        <div className="portfolioSection" id="portfolio">

          <div className="container">
            Portfolio Section
        </div>
        </div>
        <div className="contactSection">
          <div className="container" id="contact">
            Contact Section
        </div>
        </div>
      </div>
    );
  }
}

export default App;
