import React from 'react';
import PropTypes from 'prop-types';

import {
  $Comment,
  $CommentHeader,
  $UserInfo,
  $HeaderButtons,
  $HeaderButton,
  $CommentText,
  $UserImg,
  $UserName,
  $CommentTime,
} from './style';
import Label from '../../../../common/Label';
import Icon from '../../../../common/Icon';

// TODO: 내 userId -> context로 빼기.
const myId = 6;

const Comment = ({ writerId, commentData }) => {
  const isMine = commentData.commentUser.userId === myId;

  return (
    <$Comment>
      <$CommentHeader>
        <$UserInfo>
          <$UserImg src={commentData.commentUser.url} />
          <$UserName>{commentData.commentUser.userName}</$UserName>
          <$CommentTime>1분 전</$CommentTime>
        </$UserInfo>

        <$HeaderButtons>
          {writerId === commentData.commentUser.userId && (
            <Label height={32} backgroundColor="#D9DBE9" name="작성자" />
          )}
          {isMine && (
            <$HeaderButton>
              <Icon name="edit" />
              <p>편집</p>
            </$HeaderButton>
          )}
          <$HeaderButton>
            <Icon name="smile" />
            <p>반응</p>
          </$HeaderButton>
        </$HeaderButtons>
      </$CommentHeader>

      <$CommentText>{commentData.content}</$CommentText>
    </$Comment>
  );
};

Comment.propTypes = {
  // isMine: PropTypes.bool.isRequired,
  commentData: PropTypes.array.isRequired,
  writerId: PropTypes.number.isRequired,
};

export default Comment;
