import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { $TabButtonWrapper, $TabRightButton, $TabLeftButton } from './style';

const TabButton = ({ labelCount = 0, milestoneCount = 0 }) => {
  // TODO: 탭버튼 상태 관리해야함.
  return (
    <$TabButtonWrapper>
      <$TabRightButton>
        <Icon name="label" />
        {`레이블(${labelCount})`}
      </$TabRightButton>
      <$TabLeftButton>
        <Icon name="milestone" />
        {`마일스톤(${milestoneCount})`}
      </$TabLeftButton>
    </$TabButtonWrapper>
  );
};

TabButton.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default TabButton;
