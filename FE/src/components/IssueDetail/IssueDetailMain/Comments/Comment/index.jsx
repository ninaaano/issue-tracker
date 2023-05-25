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

const Comment = ({ isMine = true, commentData }) => {
  return (
    <$Comment>
      <$CommentHeader>
        <$UserInfo>
          <$UserImg src={commentData.commentUser.url} />
          <$UserName>{commentData.commentUser.userName}</$UserName>
          <$CommentTime>1분 전</$CommentTime>
        </$UserInfo>

        <$HeaderButtons>
          {isMine && (
            <React.Fragment>
              <Label height={32} backgroundColor="#D9DBE9" name="작성자" />
              <$HeaderButton>
                <Icon name="edit" />
                <p>편집</p>
              </$HeaderButton>
            </React.Fragment>
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
  isMine: PropTypes.bool.isRequired,
  commentData: PropTypes.array.isRequired,
};

export default Comment;
