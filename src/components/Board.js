import React, { useContext } from 'react'

import BoardRow from './BoardRow'
import { BoardContext } from '../context/BoardContext'
import { headerHeight } from '../lib/constants'

const Board = () => {
  const { board } = useContext(BoardContext)

  return (
    <div
      style={{
        position: 'absolute',
        top: headerHeight,
        bottom: 0,
        left: 0,
        right: 0,
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
