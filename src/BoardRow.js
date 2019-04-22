import React from 'react'
import PropTypes from 'prop-types'

import BoardItem from './BoardItem'

const BoardRow = ({ boardRow, rowNum }) => {

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexGrow: 1,
      alignItems: 'space-around',
    }}>
      {
        boardRow.map((item, i) => (
          <BoardItem key={i} item={item} rowNum={rowNum} colNum={i} />
        ))
      }
    </div>
  )
}

BoardRow.propTypes = {
  boardRow: PropTypes.array.isRequired,
  rowNum: PropTypes.number.isRequired,
}

export default BoardRow
