import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import TabButton from '../../../common/TabButton';
import Icon from '../../../common/Icon';
import { $NavButtons } from './style';

const NavButtons = ({ labelCount, milestoneCount }) => {
  return (
    <$NavButtons>
      <TabButton labelCount={labelCount} milestoneCount={milestoneCount} />
      <Button type="contained" size="S">
        <Icon name="plus" />
        <p>이슈 작성</p>
      </Button>
    </$NavButtons>
  );
};

NavButtons.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default NavButtons;
