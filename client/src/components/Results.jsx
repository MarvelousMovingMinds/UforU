import React from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

import ResultListEntry from './ResultListEntry.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    };
  }

  componentDidMount() {
    // Parse out info from url
    // Submit it to server
    // Display results
    const userInfo = {
      tuition: this.props.location.query.tuition,
      average_gpa: this.props.location.query.average_gpa,
      average_sat_score: this.props.location.query.average_sat_score,
      majors: this.props.location.query.majors,
      size: this.props.location.query.size,
      sports_division: this.props.location.query.sports_division
    };

    this.sendSurveyInfo(userInfo);
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
      <div>
        {this.state.colleges.map((college, i) => {
          return <ResultListEntry key={i} college={college} />;
        })}
      </div>
    );
  }
}

export default Results;
