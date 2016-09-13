import React, { Component } from 'react';

class SignupLeftContent extends Component {
  render() {
    return (
      <div className ="Signup-left-content">
        <div className="Signup-left-message>">
          <h2 className="Signup-left-message-header">How do you want to call your team?</h2>
          <p className="Signup-left-message-p">The team name will be used for communication between you and your teammates.</p>
        </div>
        <div className="Signup-left-input">
          <p className="Signup-left-input-p">Company Name</p>
          <input className="Signup-left-input-box" />
        </div>
        <div className="Signup-left-next">
          <button className="Signup-left-next-button"> NEXT </button>
        </div>
      </div>
    );
  }
}

export default SignupLeftContent;
