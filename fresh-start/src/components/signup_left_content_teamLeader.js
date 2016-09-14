import React from 'react';

const SignupLeftContentTeamLeader = (props) => {
  const progress = props.progress;
  if (progress === 'teamLeader'){
    return (
      <div>
        <div className="Signup-left-message>">
          <h2 className="Signup-left-message-header">What’s your name?</h2>
          <p className="Signup-left-message-p">Your name will be used for communication between you and your teammates.</p>
        </div>
        <div className="Signup-left-input">
          <p className="Signup-left-input-p">Your Name</p>
          <input className="Signup-left-input-box-double-left" />
          <input className="Signup-left-input-box-double-right" />
        </div>
        <div className="Signup-left-next">
          <button className="Signup-left-next-button"> NEXT </button>
        </div>
      </div>
    );
  }
  return null;
}

export default SignupLeftContentTeamLeader;
