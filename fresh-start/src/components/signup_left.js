import React from 'react';
import Logo from './shyfts.svg';
import SignupLeftContent from './signup_left_content';

const SignupLeft = (props) => {
  const progress = props.progress;
    return (
      <div className="Signup-left">
        <div className="Signup-left-logo">
          <img src={Logo}/>
        </div>
        <SignupLeftContent progress={progress}/>
      </div>
    );
  }


export default SignupLeft;
