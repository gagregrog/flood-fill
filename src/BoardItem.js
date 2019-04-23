import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'

import { ItemsContext } from './App'
import { debug } from './lib/constants'
import { handleFloodFill } from './lib/floodFill'

const BoardItem = ({ item }) => {
  const { setBoard, board } = useContext(ItemsContext)

  const handleClick = useCallback(() => {
    if (!item.color) return;

    setBoard(handleFloodFill(board, item))
  }, [board, setBoard, item])

  return (
    <button
      className={item.color ? 'hover' : 'inactive'}
      style={{
        flexGrow: 1,
        outline: 'none',
        cursor: 'pointer',
        background: item.color || 'black',
        border: '2px solid black',
        transition: 'all 300ms ease-in-out'
      }}
      onClick={handleClick}
    >
      { debug && `(${item.x}, ${item.y})` }
    </button>
  )
}

BoardItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default BoardItem
