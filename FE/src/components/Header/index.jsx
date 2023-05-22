import React from 'react';
import PropTypes from 'prop-types';

import useTheme from '../../hooks/useTheme';
import Icon from '../common/Icon';
import { $Header, $RightElements } from './style';

const Header = ({ userImgSrc }) => {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <$Header>
      <a href="/">
        <Icon width={199} height={25} name="defaultLogo" />
      </a>
      <$RightElements>
        <button type="button" onClick={toggleTheme}>
          <Icon width={32} height={32} name={themeMode === 'light' ? 'lightMode' : 'darkMode'} />
        </button>
        <img src={userImgSrc} alt="myImg" />
      </$RightElements>
    </$Header>
  );
};

Header.propTypes = {
  userImgSrc: PropTypes.string,
};

export default Header;
