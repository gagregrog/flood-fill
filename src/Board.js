import React, { useContext } from 'react'

import BoardRow from './BoardRow'
import { ItemsContext } from './App'

const Board = () => {
  const { board } = useContext(ItemsContext)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '90vw',
        height: '90vh',
      }}
    >
      {
        board.map((boardRow, i) => (
          <BoardRow
            key={i}
            boardRow={boardRow}
            rowNum={i}
          />
        ))
      }
    </div>
  )
}

export default Board
