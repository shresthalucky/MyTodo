import React from 'react';
import { Redirect } from 'react-router-dom';
import { RiLoginCircleLine, RiAddCircleLine } from 'react-icons/ri';

import Api from '../../api/ApiUtils';
import Input from '../../components/Input';
import Button from '../../components/Button';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isDisable: false,
      errorMessage: '‏‏‎ ‎'
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleDisable = () => {
    this.setState({
      isDisable: !this.state.isDisable
    });
  }

  setErrorMessage = (message) => {
    this.setState({
      errorMessage: message
    });
  }

  handleLogin = (e) => {

    e.preventDefault();
    this.setErrorMessage('Logging in...');
    this.toggleDisable();

    Api.post('/users/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.tokenHandler(res.data);
      })
      .catch(err => {
        this.setErrorMessage(err.response.data.message);
        this.toggleDisable();
      });
  }

  handleRegister = (e) => {

    this.setErrorMessage('Registering...');
    this.toggleDisable();

    Api.post('/users/register', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.tokenHandler(res.data);
      })
      .catch(err => {
        this.setErrorMessage(err.response.data.message);
        this.toggleDisable();
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.props.token) {
      return <Redirect to={from} />
    }

    return (
      <div className="outer-wrapper">
        <div className="outer-wrapper__cell">
          <div className="login-wrapper">
            <form onSubmit={this.handleLogin}>
              <div className="login-wrapper__input">
                <Input
                  type="text"
                  changeHandler={this.handleInput}
                  value={this.state.username}
                  name="username"
                  placeholder="username"
                  required={true} />
              </div>
              <div className="login-wrapper__input">
                <Input
                  type="password"
                  changeHandler={this.handleInput}
                  value={this.state.password}
                  name="password"
                  placeholder="password"
                  required={true} />
              </div>
              <div className="errorMessage">{this.state.errorMessage}</div>
              <div className="login-buttons">
                <Button
                  type="submit"
                  className="purple"
                  clickHandler={this.handleLogin}
                  icon={<RiLoginCircleLine />}
                  disabled={this.state.isDisable}>
                  Login</Button>

                <Button
                  type="button"
                  className="blue"
                  clickHandler={this.handleRegister}
                  icon={<RiAddCircleLine />}
                  disabled={this.state.isDisable}>
                  Register</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
