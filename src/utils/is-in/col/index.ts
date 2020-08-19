import { GRID, NUMBER } from 'typings'

interface IInput {
  col: number
  grid: GRID
  value: NUMBER
}

/**
 * A function that returns true if the value is already being used in the current grid column.
 * @param input Object with a 9x9 Sudoku grid, a column index, and a value 1-9
 */
function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }
  return false
}

export default isInCol
