import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';
import Label from '../../../../common/Label';
import TextArea from '../../../../common/TextArea';
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
  $Buttons,
} from './style';

// TODO: 내 userId -> context로 빼기.
const myId = 6;

// ? filesData도 받아와야 할 듯
const Comment = ({ writerId, commentData }) => {
  const isMine = commentData.commentUser.userId === myId;
  const [isEdited, setIsEdited] = useState(false);
  // ? 정말 필요한 상태일까?
  const [editComment, setEditComment] = useState(commentData.content);
  const tempCommentRef = useRef('');
  const filesRef = useRef([]);
  const editBtnHandler = () => {
    setIsEdited(true);
  };

  const cancelEditBtnHandler = () => {
    tempCommentRef.current.value = commentData.content;
    setIsEdited(false);
    setEditComment(commentData.content);
  };

  const completeEditHandler = () => {
    const newComment = {
      editedComment: tempCommentRef.current.value,
      files: filesRef.current.files,
    };

    setEditComment(tempCommentRef.current.value);
    setIsEdited(false);

    console.log(newComment);
  };

  return (
    <>
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
              <$HeaderButton onClick={editBtnHandler}>
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
        {isEdited ? (
          <TextArea name="commentEdit" ref={{ commentRef: tempCommentRef, filesRef }} size="S" />
        ) : (
          <$CommentText>{editComment}</$CommentText>
        )}
      </$Comment>
      {isEdited && (
        <$Buttons>
          <Button type="outline" size="S" onClick={cancelEditBtnHandler}>
            <Icon name="xSquare" />
            <p>편집 취소</p>
          </Button>
          <Button type="contained" size="S" onClick={completeEditHandler}>
            <Icon name="edit" fill="#FEFEFE" />
            <p>편집 완료</p>
          </Button>
        </$Buttons>
      )}
    </>
  );
};

Comment.propTypes = {
  // isMine: PropTypes.bool.isRequired,
  commentData: PropTypes.array.isRequired,
  writerId: PropTypes.number.isRequired,
};

export default Comment;
