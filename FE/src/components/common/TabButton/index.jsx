import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { $TabButton, $Button } from './style';

const TabButton = ({ labelCount = 0, milestoneCount = 0 }) => {
  return (
    <$TabButton>
      <$Button type="ghost" size="M" position="left">
        <Icon name="label" />
        <p>{`레이블(${labelCount})`}</p>
      </$Button>
      <$Button type="ghost" size="M" position="right">
        <Icon name="milestone" />
        <p>{`마일스톤(${milestoneCount})`}</p>
      </$Button>
    </$TabButton>
  );
};

TabButton.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default TabButton;
