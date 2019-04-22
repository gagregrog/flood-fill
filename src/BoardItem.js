import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'

import { ItemsContext } from './App'
import { handleFloodFill } from './lib/floodFill'

const BoardItem = ({ item }) => {
  const { setBoard, board } = useContext(ItemsContext)

  const handleClick = useCallback(() => {
    setBoard(handleFloodFill(board, item))
  }, [board, setBoard, item])

  return (
    <button
      className="hover"
      style={{
        outline: 'none',
        border: '2px solid black',
        margin: '5px',
        flexGrow: 1,
        minWidth: 10,
        minHeight: 10,
        cursor: 'pointer',
        background: item.color,
        transition: 'all 300ms ease-in-out'
      }}
      onClick={handleClick}
    />
  )
}

BoardItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default BoardItem
