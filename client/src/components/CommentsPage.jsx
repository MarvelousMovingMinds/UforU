import React from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

import CommentsBanner from './CommentsBanner.jsx';
import CommentsBody from './CommentsBody.jsx';

class CommentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      university: {}
    };
  }

  componentDidMount() {
    this.getBanner(this.props.params.id);

  }

  getBanner(universityId) {
    axios.get('/api/college', {
      params: {
        universityId: universityId
      }
    }).then((response) => {
      this.setState({
        university: response.data[0]
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  render () {
    return (
      <div>
        <CommentsBanner college={this.state.university} />
        <CommentsBody collegeId={this.props.params.id}/>
      </div>
    );
  }
}

export default CommentsPage;
