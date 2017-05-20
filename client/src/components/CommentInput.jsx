import React from 'react';

class CommentsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      comment: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.onCommentInputChange = this.onCommentInputChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const commentObj = {
      user: this.state.user,
      comment: this.state.comment,
      universityId: this.props.collegeId
    };
    this.props.postComment(commentObj);
  }

  onUserInputChange (e) {
    this.setState({
      user: e.target.value
    });
  }

  onCommentInputChange (e) {
    this.setState({
      comment: e.target.value
    });
  }



  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={this.onUserInputChange}
          value={this.state.user}
        />
        <input
          type="text"
          placeholder="Comment"
          onChange={this.onCommentInputChange}
          value={this.state.comment}
        />
        <button type="submit">Comment</button>
      </form>
    );
  }
}

export default CommentsInput;
