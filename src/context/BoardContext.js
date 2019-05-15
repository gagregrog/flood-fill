import React, { useState, createContext, useMemo, useCallback } from 'react'

import { blankBoard } from '../lib/floodFill'

const nullContext = { board: blankBoard, setBoard: () => {} }

export const ItemsContext = createContext(nullContext)

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(blankBoard)
  const [lastFill, setLastFill] = useState(0)

  const handleUpdateBoard = useCallback((updatedBoard) => {
      let count = 0;

      board.forEach((row, y) => row.forEach(({ color }, x) => {
        if (color !== updatedBoard[y][x].color) count++
      }))

      setLastFill(count)
      setBoard(updatedBoard)
    },
    [board],
  )

  const itemsHandler = useMemo(() => ({
    board,
    lastFill,
    setBoard: handleUpdateBoard,
  }), [board, lastFill, handleUpdateBoard])

  return (
    <ItemsContext.Provider value={itemsHandler}>
      { children }
    </ItemsContext.Provider>
  )
}

export default BoardProvider
