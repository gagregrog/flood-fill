import React, { useState, createContext, useMemo } from 'react'

import { blankBoard } from '../lib/floodFill'

export const ItemsContext = createContext([])

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(blankBoard)
  const itemsHandler = useMemo(() => ({
    board,
    setBoard,
  }), [board])

  return (
    <ItemsContext.Provider value={itemsHandler}>
      { children }
    </ItemsContext.Provider>
  )
}

export default BoardProvider
