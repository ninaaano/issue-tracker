import React from 'react';
import PropTypes from 'prop-types';

import { $Header } from './style';
import logoImg from '../../assets/defaultLogo.svg';

const Header = ({ userImgSrc, userName }) => {
  return (
    <$Header>
      <a href="/">
        <img src={logoImg} alt="logo" />
      </a>
      <img src={userImgSrc} alt={`@${userName}`} />
    </$Header>
  );
};

Header.propTypes = {
  userImgSrc: PropTypes.string,
  userName: PropTypes.string,
};

export default Header;
