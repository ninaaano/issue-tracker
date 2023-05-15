import React from 'react';
import PropTypes from 'prop-types';
import { $Header } from './style';

const Header = ({ userImgSrc, userName }) => {
  const logoSrc = './assets/defaultLogo.svg';

  return (
    <$Header>
      <a href="/">
        <img src={logoSrc} alt="logo" />
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
