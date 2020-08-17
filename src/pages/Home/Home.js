import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

  render () {
    if (!this.props.token) {
      return <Redirect to={{pathname: '/login',  state: { from: this.props.location }}} />
    }

    return (
      <div>Home</div>
    );
  }
}

export default Home;
