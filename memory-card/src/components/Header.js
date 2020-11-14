import React from 'react'

const Header = ({curScore, bestScore}) => {
  return (
    <header>
            Memory Game

      <div className="header-score-container">
        <p>Best Score: {bestScore}</p>
        <hr style={{width: '100%'}} />
        <p>Current Score: {curScore} </p>
      </div>
    </header>
  )
}

export default Header
