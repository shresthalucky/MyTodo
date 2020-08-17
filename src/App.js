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
    const token = localStorage.getItem('token');

    if (token) {
      Api.get('/users')
        .then(res => {
          this.setToken(res.data);
        });
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

  render() {
    return (
      <div>
        <Routes token={this.state.token} tokenHandler={this.setToken} />
      </div>
    );
  }
}

export default App;
