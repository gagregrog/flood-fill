import React from 'react'
import PropTypes from 'prop-types'

import BoardItem from './BoardItem'

const BoardRow = ({ boardRow }) => {

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexGrow: 1,
      alignItems: 'space-around',
    }}>
      {
        boardRow.map((item, i) => (
          <BoardItem key={i} item={item} />
        ))
      }
    </div>
  )
}

BoardRow.propTypes = {
  boardRow: PropTypes.array.isRequired,
}

export default BoardRow
