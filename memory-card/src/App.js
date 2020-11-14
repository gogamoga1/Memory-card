import Header from './components/Header'
import './styles/App.css'
import React, { useState, useEffect } from 'react'
import './components/Header.js'
import './components/MainGrid.js'
import MainGrid from './components/MainGrid.js'

function App() {
  const [curScore, setCurScore] = useState(0)
  const [bestScore, setbestScore] = useState(0)

  return (
    <div className="App">
      <Header curScore={curScore} bestScore={bestScore} />
      <MainGrid setCurScore={setCurScore} setBestScore={setbestScore} />
    </div>
  )
}

export default App
