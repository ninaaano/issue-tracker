import React from 'react';
import PropTypes from 'prop-types';
import NewIssueForm from '../../components/NewIssueForm';
import { $Header } from './style';

const NewIssue = ({ userImgSrc }) => {
  return (
    <React.Fragment>
      <$Header>새로운 이슈 작성</$Header>
      <NewIssueForm userImgSrc={userImgSrc} />
    </React.Fragment>
  );
};

NewIssue.propTypes = {
  userImgSrc: PropTypes.string,
};

export default NewIssue;
