import React, { Component } from 'react';
import './Signup.css';
import Logo from './resources/Logo.svg';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <div className="Signup-left">

          <div className="Signup-left-logo"> <img src={Logo}/> </div>

          <div className ="Signup-left-content">
            <div className="Signup-left-message>">
              <h2 className="Signup-left-message-header">How do you want to call your team?</h2>
              <p className="Signup-left-message-p">Your name will be used for communication between you and your teammates.</p>
            </div>

            <div className="Signup-left-input">
              <p className="Signup-left-input-p">Company Name</p>
              <input className="Signup-left-input-box" type="text" value="Test" />
            </div>
          </div>

          <div className="Signup-left-next">
            <button className="Signup-left-next-button"> NEXT </button>
          </div>
        </div>

        <div className="Signup-right">
          <div className="Signup-right-findTeam">
            <p className="Signup-right-findTeam-p">Looking to join an existing team?</p>
            <button className="Signup-right-findTeam-button">Find your Team</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Signup;
