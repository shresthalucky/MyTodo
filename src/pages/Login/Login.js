import React from 'react';
import { Redirect } from 'react-router-dom';

import Api from '../../api/ApiUtils';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = (e) => {
    Api.post('/users/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.tokenHandler(res.data);
      });
  }

  handleRegister = (e) => {
    Api.post('/users/register', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.tokenHandler(res.data);
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.props.token) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <input type="text" onChange={this.handleInput} value={this.state.username} name="username" />
        <input type="password" onChange={this.handleInput} value={this.state.password} name="password" />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default Login;
