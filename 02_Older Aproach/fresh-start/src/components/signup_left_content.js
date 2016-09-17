import React from 'react';
import SignupLeftContentTeam from './signup_left_content_team';
import SignupLeftContentTeamLeader from './signup_left_content_teamLeader';

const SignupLeftContent = (props) => {
  const progress = props.progress;
    return (
      <div className ="Signup-left-content">
        <SignupLeftContentTeam progress={progress} />
        <SignupLeftContentTeamLeader progress={progress} />
      </div>
    );
  }


export default SignupLeftContent;
