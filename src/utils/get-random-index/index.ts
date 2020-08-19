/**
 * Returns a random Sudoku grid index in the 0 - 8 range.
 */
function getRandomIndex(): number {
  return Math.floor(Math.random() * 9)
}

export default getRandomIndex
