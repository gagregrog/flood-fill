import floodFillInterviewee from './solution'
import floodFillMin from './solution.min.js'
import { colors, boardWidth, boardHeight } from './constants'

const getRandomColor = () => {
  const max = colors.length
  const random = Math.floor(Math.random() * max)

  return colors[random]
}

const getRandomColorObj = (x, y) => ({ color: getRandomColor(), x, y })

export const blankBoard = Array.from(
  { length: boardHeight },
  (a, y) => Array.from(
    { length: boardWidth },
    (b, x) => getRandomColorObj(x, y)
  )
)

export const numRectangles = boardWidth * boardHeight

const floodFillApi = async (board, clickedItem) => {
  console.log('Sending request to API...')
  const body = { board, clickedItem }

  try {
    const res = await fetch(`http://localhost:3001/flood`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json()

    if (data.message || !Array.isArray(data.board)) {
      throw new Error(data.message)
    }

    console.log('Response OK.')

    return data.board
  } catch (e) {
    if (e.message === 'Failed to fetch') {
      e.message += '.\n\nEnsure that your python server is running.'
    }

    window.alert(e.message)
    console.error(e.message)
    
    return board
  }
}

const floodFillJs = (
  process.env.REACT_APP_WITH_SOLUTION
    ? floodFillMin
    : floodFillInterviewee
)

const floodFillProm = async (board, clickedItem) => {
  const updatedBoard = floodFillJs(board, clickedItem)
  if (!Array.isArray(updatedBoard)) {
    const message = 'There was an error with your algorithm.'
    window.alert(message)
    console.error(message)

    return board
  }

  return updatedBoard;
}

export const handleFloodFillAsync = (
  process.env.REACT_APP_WITH_PYTHON
    ? floodFillApi
    : floodFillProm
)
