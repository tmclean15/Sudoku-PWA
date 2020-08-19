import { GRID, NUMBER, SQUARE } from 'typings'
import {
  checkGrid,
  identifySquare,
  isInCol,
  isInRow,
  isInSquare,
  shuffle,
} from 'utils'

const numbers: NUMBER[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A function that recursively fills a sudoku grid with random numbers, ensuring the grid follows the constraints of Sudoku
 * @param grid A 9x9 Sudoku grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            const square: SQUARE = identifySquare({ col, grid, row })

            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) {
                return true
              } else if (fillGrid(grid)) return true
            }
          }
        }
      }

      break
    }
  }
  grid[row][col] = 0
}

export default fillGrid
