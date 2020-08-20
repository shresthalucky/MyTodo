import React from 'react';

import Routes from './routes';
import Api from './api/ApiUtils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      id: '',
      username: ''
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token') || '';

    this.setState({ token: token });
    
    if (token) {
      Api.get('/users')
        .then(res => {
          this.setToken(res.data);
        })
        .catch(() => this.removeToken);
    }
  }

  setToken = ({ token, id, username }) => {
    this.setState({
      token,
      id,
      username
    });

    localStorage.setItem('token', token);
  }

  removeToken = () => {
    this.setState({
      token: '',
      id: '',
      username: ''
    });
    
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <Routes token={this.state.token} tokenHandler={this.setToken} logoutHandler={this.removeToken} />
      </div>
    );
  }
}

export default App;
