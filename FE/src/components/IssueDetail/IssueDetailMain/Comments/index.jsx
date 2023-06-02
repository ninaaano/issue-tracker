import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import { $Comments } from './style';

const myId = 2;
const Comments = ({ issue, getNewIssueData }) => {
  // const commentData = issue.comment;
  const commentData = issue.commentDtoListResponse.allComments;

  return (
    <$Comments>
      {commentData.map((comment) => (
        <Comment
          key={comment.commentId}
          commentData={comment}
          writerId={myId}
          issueId={issue.issueId}
          getNewIssueData={getNewIssueData}
        />
      ))}
    </$Comments>
  );
};

Comments.propTypes = {
  issue: PropTypes.object.isRequired,
  getNewIssueData: PropTypes.func.isRequired,
};

export default Comments;
