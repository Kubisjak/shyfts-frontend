import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignupLeft from './components/signup_left';
import SignupRight from './components/signup_right';

class App extends Component {
  constructor(props) {
    super (props)

    this.setState = {
      progress: 'team',
      teamName: '',
      teamLeader: [],
      teamLeaderAdress: '',
      password: '',
      invites: []
    }

  }

render () {
  return (
    <div className="Signup">
      <SignupLeft />
      <SignupRight />
    </div>
  )
}

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
