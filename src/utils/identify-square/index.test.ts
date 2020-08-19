import { GRID } from 'typings'

import identifyWorkingSquare from './'

describe('identifyWorkingSquare', () => {
  it('returns the correct working square', () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 3, 1, 7, 8, 5, 6],
    ]

    expect(identifyWorkingSquare({ grid, col: 0, row: 0 })).toEqual([
      [8, 4, 2],
      [5, 3, 7],
      [6, 9, 1],
    ])
    expect(identifyWorkingSquare({ grid, col: 8, row: 7 })).toEqual([
      [2, 3, 9],
      [7, 1, 4],
      [8, 5, 6],
    ])
    expect(identifyWorkingSquare({ grid, col: 2, row: 3 })).toEqual([
      [1, 6, 3],
      [7, 5, 8],
      [9, 2, 4],
    ])
  })
})
