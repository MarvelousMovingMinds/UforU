import React from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Cookies from 'js-cookie';
import ResultListEntry from './ResultListEntry.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: [],
      favColleges: []
    };
    this.handleFavColleges = this.handleFavColleges.bind(this);
    this.handleCookies = this.handleCookies.bind(this);
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
    })
    .catch ((error) => {
      console.error(error);
    });
  }

  handleFavColleges(college) {
    let prev = this.state.favColleges;
    let col = college;
    prev.push(col);
    this.setState({favColleges: prev})
    this.handleCookies();
  }

  handleCookies(){
    let fav = this.state.favColleges.slice(0);
    Cookies.set("colleges", fav);
  }

  render() {
    return (
      <div>
        {this.state.colleges.map((college, i) => {
          return <ResultListEntry key={i} college={college} handleFav={this.handleFavColleges} />;
        })}
      </div>
    );
  }
}

export default Results;
