import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { $TabButton, $LeftButton, $RightButton } from './style';

const TabButton = ({ labelCount = 0, milestoneCount = 0 }) => {
  return (
    <$TabButton>
      <$LeftButton type="ghost" size="M">
        <Icon name="label" />
        {`레이블(${labelCount})`}
      </$LeftButton>
      <$RightButton type="ghost" size="M">
        <Icon name="milestone" />
        {`마일스톤(${milestoneCount})`}
      </$RightButton>
    </$TabButton>
  );
};

TabButton.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default TabButton;
