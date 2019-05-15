import React from 'react'

import './App.css'
import Board from '../components/Board'
import Header from '../components/Header'
import BoardProvider from '../context/BoardContext'

const App = () => (
  <div className="App">
    <BoardProvider>
      <Header />
      <Board />
    </BoardProvider>
  </div>
)

export default App
