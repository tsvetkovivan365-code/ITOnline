import React from 'react';
import logo from '../assets/logo.jpg';

const Header = (props) => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;