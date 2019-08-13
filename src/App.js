

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

        <div className="homeScreen">
          <div className="container">
            <div className="row">
              <div className="col-md-12 imgRow">
                {/* <div className="circular">
                  <img className="circle" src="img/crabs.jpg"></img>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="nameText">
                  Full Stack Web Developer
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="introText">
                  HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB
                </div>
              </div>
            </div>
            <div className="emptyRow">

            </div>
          </div>
        </div>


        <div className="aboutSection">
          <div className="container" id="aboutMe">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="aboutMeTitle">
                    About Me
                  </div>

                </div>
                <div className="row">
                  <div className="aboutMeInfo">
                    <p>I am a Full Stack Web Developer with strong skills in HTML, CSS, Javascript, NodeJS, Express, MongoDB, and React. I’m passionate about learning new things and find great satisfaction in solving complex problems. </p>
                    <p>My previous career as a Software Test Engineer allowed me to understand the hard work it takes to put out quality software and the importance of identifying bugs in the early stages of software development. Applying this unique perspective (not sure if it’s unique but it might be) and diverse skills to Web Development has helped me improve the quality of my applications and save time in the debugging/testing phase of development.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 circular">
                <img src="/img/profile_pic-2.jpg" />
              </div>

            </div>

            <div className="container">
              <div className="row" id="contact">
                <div className="col-md-6">
                  <div className="contactMeTitle">Contact Me </div>
                </div>
              </div>

              <div className="row">
                <div className="contactMeInfo">
                  <h6>Email: saronnhong@gmail.com</h6>
                  <h6>Phone: (209) 598-4517</h6>
                  <h6>LinkedIn</h6>
                  <h6>Github</h6>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div >
    );
  }
}

export default App;
