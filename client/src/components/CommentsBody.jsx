import React from 'react';
import axios from 'axios';
import CommentsList from './CommentsList.jsx';
import CommentInput from './CommentInput.jsx';
import io from 'socket.io-client';

class CommentsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    let URL = '';
    
    if (process.env.URL) {
      URL = `${process.env.URL}:${process.env.PORT}`;
    } else {
      URL = 'http://127.0.0.1:3000';
    }

    console.log('io.connect URL is:', URL);

    this.client = io.connect(URL);

    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    this.getComments(this.props.collegeId);

    this.client.on('connect', () => {
      this.client.emit('room', this.props.collegeId);
    });

    this.client.on('roomResponse', (response) => {
      console.log(response);
    });

    this.client.on('dbError', (err) => {
      console.error(err);
    });

    this.client.on('commentAdded', (comment) => {
      this.state.comments.push(comment);
      this.setState({
        comments: this.state.comments
      });
    });
  }

  getComments(universityId) {
    axios.get('/api/comments', {
      params: {
        universityId: universityId
      }
    }).then(response => {
      this.setState({
        comments: response.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  postComment(comment) {
    this.client.emit('comment', comment);
  }

  render () {
    return (
      <div>
        <p>This is the comments chat</p>
        <CommentsList comments={this.state.comments} />
        <CommentInput collegeId={this.props.collegeId} postComment={this.postComment}/>
      </div>
    );
  }
}

export default CommentsBody;
