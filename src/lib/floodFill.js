const colors = [
  'red',
  'blue',
  'yellow',
]

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

const gridDim = 10
const boardWidth = gridDim
const boardHeight = gridDim

export const blankBoard = Array.from(
  { length: boardHeight },
  (a, y) => Array.from(
    { length: boardWidth },
    (b, x) => getRandomColorObj(x, y)
  )
)

export const handleFloodFill = (board, clickedItem) => {
  return board.map((row) => row.map((item) => ({ ...item, color: clickedItem.color })))
}
