import React from 'react';
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

export default Header;
