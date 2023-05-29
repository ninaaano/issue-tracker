import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import Icon from '../common/Icon';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';
import SideBar from '../common/SideBar';
import { $NewIssueForm, $NewIssueFormMain, $UserImg, $InputsLayout, $ButtonsLayout } from './style';

const NewIssueForm = ({ userImgSrc, userData, labelData, milestoneData }) => {
  const [issue, setIssue] = useState({
    title: '',
    comment: '',
    files: [],
    selectedItems: {},
  });
  const commentRef = useRef('');
  const filesRef = useRef([]);
  const navigate = useNavigate();

  const changeTitleHandler = ({ target }) => {
    setIssue((previous) => {
      return { ...previous, title: target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newIssue = {
      commentRef: commentRef.current.value,
      files: filesRef.current.files,
    };

    console.log(newIssue);
  };
  const navigateToIssueList = () => navigate('/');

  return (
    <$NewIssueForm onSubmit={submitHandler}>
      <$NewIssueFormMain>
        <$UserImg src={userImgSrc} alt="myImg" />
        <$InputsLayout>
          <TextInput id="issueTitle" value={issue.title} onChange={changeTitleHandler} labelText="제목" />
          <TextArea name="issueComment" ref={{ commentRef, filesRef }} size="L" />
        </$InputsLayout>
        <SideBar
          assignees={userData}
          labels={labelData}
          milestones={milestoneData}
          selectedItems={issue.selectedItems}
        />
      </$NewIssueFormMain>
      <$ButtonsLayout>
        {/* TODO: 버튼을 누르면 페이지 이동한다면, button 보단 link가 더 적합 */}
        <Button type="ghost" size="S" onClick={navigateToIssueList}>
          <Icon name="xSquare" />
          <p>작성 취소</p>
        </Button>
        <Button type="contained" size="L" onClick={submitHandler} disabled={issue.title.length === 0}>
          완료
        </Button>
      </$ButtonsLayout>
    </$NewIssueForm>
  );
};

NewIssueForm.propTypes = {
  userImgSrc: PropTypes.string.isRequired,
  userData: PropTypes.array.isRequired,
  labelData: PropTypes.array.isRequired,
  milestoneData: PropTypes.array.isRequired,
};

export default NewIssueForm;
