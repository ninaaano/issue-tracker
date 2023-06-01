import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import { $Comments } from './style';

const myId = 1;
const Comments = ({ issue }) => {
  // const commentData = issue.comment;
  const commentData = issue.commentDtoListResponse.allComments;

  return (
    <$Comments>
      {commentData.map((comment) => (
        <Comment key={comment.commentId} commentData={comment} writerId={myId} />
      ))}
    </$Comments>
  );
};

Comments.propTypes = {
  issue: PropTypes.object.isRequired,
};

export default Comments;
