

// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { BrowserRouter, Router, Link } from "react-router-dom";
import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  state = {
    email: {
      recipient: 'saronnhong@gmail.com',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
  }

  render() {
    console.log('public url: ', process.env.PUBLIC_URL);

    const { email } = this.state;

    const textArea = {
      borderRadius: 4
    }

    return (
      <div className="main">

        <div className="homeScreen">
          <div className="container">
            <div className="row">
              <div className="col-md-12 imgRow">

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
                    <p>My previous career as a Software Test Engineer allowed me to understand the hard work it takes to put out quality software and the importance of identifying bugs in the early stages of software development. Applying this unique perspective and diverse skills to Web Development has helped me improve the quality of my applications and save time in the debugging phase of development.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 circular">
                <img src={process.env.PUBLIC_URL + "/img/saron.jpg"} />
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
                  <a className="contactLinks" href="www.linkedin.com/in/saronnhong"><h6>LinkedIn</h6></a>

                  <a className="contactLinks" href="https://github.com/saronnhong"><h6>Github</h6></a>

                  <div>
                    <h2> Send Email </h2>
                    <label> Recipient </label>
                    <br />
                    <input value={email.recipient}
                      onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                    <div />
                    <label> Sender </label>
                    <br />
                    <input value={email.sender}
                      onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                    <div />
                    <label> Subject </label>
                    <br />
                    <input value={email.subject}
                      onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                    <div />
                    <label> Message </label>
                    <br />
                    <textarea rows={3} value={email.text} style={textArea}
                      onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                    <div />
                    <button onClick={this.sendEmail}> Send Email </button>
                  </div>
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
