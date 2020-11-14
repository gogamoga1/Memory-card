import React from 'react'
import logo from '../logo.png'; // Tell webpack this JS file uses this image


const Header = ({ curScore, bestScore }) => {
  return (
    <header>
      <div className="project-name">
        {' '}
        <a href="https://github.com/gogamoga1/Memory-card/tree/master/memory-card">
          <img id="github" src={logo} alt="github" /> Memory Game
        </a>
      </div>

      <div className="header-score-container">
        <p>Best Score: {bestScore}</p>
        <hr style={{ width: '100%' }} />
        <p>Current Score: {curScore} </p>
      </div>
    </header>
  )
}

export default Header
