import { SQUARE, NUMBER } from 'typings'

interface IInput {
  square: SQUARE
  value: NUMBER
}

/**
 * Checks whether a given value is in the Sudoku square
 * @param input Object with a 3x3 Sudoku square, and a value 1-9
 */
function isInSquare({ square, value }: IInput): boolean {
  return square.some((row) => row.includes(value))
}

export default isInSquare
