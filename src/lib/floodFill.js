import floodFillSolution from './solution'
import { colors, boardWidth, boardHeight } from './constants'

const getRandomColor = () => {
  const max = colors.length
  const random = Math.floor(Math.random() * max)

  return colors[random]
}

const getRandomColorObj = (x, y) => ({
  color: getRandomColor(),
  x,
  y,
})

export const blankBoard = Array.from(
  { length: boardHeight },
  (a, y) => Array.from(
    { length: boardWidth },
    (b, x) => getRandomColorObj(x, y)
  )
)

const defaultFloodFill = (board, clickedItem) => {
  return board.map((row) => row.map((item) => ({ ...item, color: clickedItem.color })))
}

export const handleFloodFill = floodFillSolution || defaultFloodFill
