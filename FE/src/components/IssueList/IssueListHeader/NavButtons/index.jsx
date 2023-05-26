import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import TabButton from '../../../common/TabButton';
import Icon from '../../../common/Icon';
import { $NavButtons } from './style';

const NavButtons = ({ labelCount, milestoneCount }) => {
  const navigate = useNavigate();

  const navigateToNewIssue = () => navigate('/issues/new');

  return (
    <$NavButtons>
      <TabButton labelCount={labelCount} milestoneCount={milestoneCount} />
      <Button type="contained" size="S" onClick={navigateToNewIssue}>
        <Icon name="plus" />
        이슈 작성
      </Button>
    </$NavButtons>
  );
};

NavButtons.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default NavButtons;
