import React from 'react';
import logo from '../assets/logo.png'

function Header({score}) {
  return <header>
    <img className='header-logo' src={logo} alt="logo" />
    <h2 className='header-title'>Memory Game</h2>
    <div className='game-score'>Your score: {score}</div>
  </header>;
}

export default Header;
