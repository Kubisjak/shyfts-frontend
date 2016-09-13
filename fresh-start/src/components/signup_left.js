import React, { Component } from 'react';
import Logo from './shyfts.svg';
import SignupLeftContent from './signup_left_content';

class SignupLeft extends Component {
  render() {
    return (
      <div className="Signup-left">
        <div className="Signup-left-logo">
          <img src={Logo}/>
        </div>
        <SignupLeftContent />
      </div>
    );
  }
}

export default SignupLeft;
