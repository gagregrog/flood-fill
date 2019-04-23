import makeRandomColor from 'randomcolor'

const gridDims = 15
const numColors = 8

export const boardWidth = gridDims
export const boardHeight = gridDims

export const colors = Array.from({ length: numColors }, makeRandomColor)
export const debug = false
