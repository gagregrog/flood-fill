import hex2rgb from 'hex2rgb'
import makeRandomColor from 'randomcolor'

const gridDims = 15
const numColors = 8

export const boardWidth = gridDims
export const boardHeight = gridDims

export const headerHeight = 100;

export const colors = Array.from({ length: numColors }, makeRandomColor)
export const bg = colors[0]
export const fg = hex2rgb(bg).yiq

export const debug = false
