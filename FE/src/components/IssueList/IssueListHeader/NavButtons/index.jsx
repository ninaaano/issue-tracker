import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import TabButton from '../../../common/TabButton';
import Icon from '../../../common/Icon';
import { $NavButtons } from './style';

const NavButtons = (props) => {
  return (
    <$NavButtons>
      <TabButton />
      <Button type="contained" size="S">
        <Icon name="plus" />
        <p>이슈 작성</p>
      </Button>
    </$NavButtons>
  );
};

NavButtons.propTypes = {};

export default NavButtons;
