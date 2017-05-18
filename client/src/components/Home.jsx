import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

import Survey from './Survey.jsx';
import Results from './Results.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Authors from './Authors.jsx';
import Footer from './Footer.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    },

    this.sendSurveyInfo = this.sendSurveyInfo.bind(this);
  }

  sendSurveyInfo(userData) {
    console.log('axios data:', userData);
    userData.size = userData.size.split('-');
    axios({
      url: '/api/colleges/suggestions',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        this.setState({
          colleges: results.data
        });
        console.log('axios results: ', results);
      })
      .catch ((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <Banner />
        <div className="container-fluid">
          <Survey sendSurveyInfo = {this.sendSurveyInfo}/>
        </div>
        <Authors />
      </div>
    );
  }
}

export default Home;
