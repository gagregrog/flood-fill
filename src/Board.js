import React, { useContext } from 'react'

import BoardRow from './BoardRow'
import { ItemsContext } from './App'

const Board = () => {
  const { board } = useContext(ItemsContext)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',  
        overflow: 'scroll',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      {
        board.map((boardRow, i) => (
          <BoardRow
            key={i}
            boardRow={boardRow}
          />
        ))
      }
    </div>
  )
}

export default Board
