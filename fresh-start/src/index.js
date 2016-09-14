import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignupLeft from './components/signup_left';
import SignupRight from './components/signup_right';

class App extends Component {
  constructor(props) {
    super (props)

    this.state={
      progress: 'teamLeader',
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
      <SignupLeft progress={this.state.progress}/>
      <SignupRight />
    </div>
  )
}

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
