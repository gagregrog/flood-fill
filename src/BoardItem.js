import React, { useMemo, useCallback, useContext } from 'react'
import PropTypes from 'prop-types'

import { ItemsContext } from './App'
import { handleFloodFill } from './lib/floodFill'

const BoardItem = ({ item }) => {
  const { setBoard, board } = useContext(ItemsContext)

  const handleClick = useCallback(() => {
    setBoard(handleFloodFill(board, item))
  })

  return (
    <button
      className="hover"
      style={{
        outline: 'none',
        position: 'relative',
        border: '2px solid black',
        margin: '5px',
        flexGrow: 1,
        minWidth: 10,
        minHeight: 10,
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: item.color,
          transition: 'all 300ms ease-in-out'
        }}
      >
        <div className="overlay"/>
      </div>
    </button>
  )
}

BoardItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default BoardItem
