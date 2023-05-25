import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { USERS, LABELS, MILESTONES } from '../../constants/api';

// import useFetch from '../../hooks/useFetch';

import Button from '../common/Button';
import Icon from '../common/Icon';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';
import { $NewIssueForm, $NewIssueFormMain, $UserImg, $InputWrapper, $SubmitButtonWrapper } from './style';

const NewIssueForm = ({ userImgSrc }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const changeTitleHandler = ({ target }) => setTitle(target.value);
  const changeCommentHandler = ({ target }) => setComment(target.value);

  return (
    <$NewIssueForm>
      <$NewIssueFormMain>
        <$UserImg src={userImgSrc} alt="myImg" />
        <$InputWrapper>
          <TextInput id="issueTitle" value={title} onChange={changeTitleHandler} labelText="제목" />
          <TextArea id="issueComment" value={comment} onChange={changeCommentHandler} size="L" />
        </$InputWrapper>
      </$NewIssueFormMain>
      <$SubmitButtonWrapper>
        <Button type="ghost" size="S">
          <Icon name="xSquare" />
          <p>작성 취소</p>
        </Button>
        <Button type="contained" size="L">
          완료
        </Button>
      </$SubmitButtonWrapper>
    </$NewIssueForm>
  );
};

NewIssueForm.propTypes = {
  userImgSrc: PropTypes.string,
};

export default NewIssueForm;
