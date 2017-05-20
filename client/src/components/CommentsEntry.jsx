import React from 'react';

const CommentsEntry = ({ comment }) => {
  return (
    <div>
      <p>{comment.user}: {comment.comment}</p>
    </div>
  );
};

export default CommentsEntry;
