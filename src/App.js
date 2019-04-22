import React, { useState, createContext, useMemo } from 'react'

import './App.css'
import Board from './Board'

import { blankBoard } from './lib/floodFill'

const Context = createContext([])

const App = () => {
  const [board, setBoard] = useState(blankBoard)
  const itemsHandler = useMemo(() => ({
    board,
    setBoard,
  }), [board])

  return (
    <div className="App">
      <Context.Provider value={itemsHandler}>
        <Board />
      </Context.Provider>
    </div>
  )
}

export default App
export const ItemsContext = Context;
