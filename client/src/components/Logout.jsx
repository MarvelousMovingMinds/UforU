import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    axios({
      url: '/logout',
      method: 'POST'
    })
      .then((results) => {
        this.setState({isLoading: false});
      })
      .catch((error) => {
        console.log('Logout.jsx', error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return null;
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default Logout;