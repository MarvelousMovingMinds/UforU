import React from 'react';
import CommentsEntry from './CommentsEntry.jsx';

const CommentsList = ({ comments }) => {
  return (
    <div>
      {
        comments.map(comment => {
          return <CommentsEntry key={comment.id} comment={comment} />;
        })
      }
    </div>
  );
};

export default CommentsList;
