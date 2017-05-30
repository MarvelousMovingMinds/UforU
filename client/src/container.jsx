import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Container extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: true
    };
  }

  componentWillMount() {
    axios({
      url: '/auth',
      method: 'POST'
    })
      .then((results) => {
        if (results.data) {
          this.setState({isLoggedIn: true, isLoading: false});
        } else {
          this.setState({isLoggedIn: false, isLoading: false});
        }
      })
      .catch((error) => {
        console.log('Container.jsx error', error);
      });

  }

  render() {
    if (this.state.isLoading) {
      return null;
    } else {
        if (this.state.isLoggedIn) {
          return <Redirect to={{pathname: '/home', state: {isLoggedIn: this.state.isLoggedIn}}} />;
        } else {
          return <Redirect to={{pathname: '/login', state: {isLoggedIn: this.state.isLoggedIn}}} />;
        }
    }
  }
}

export default Container;