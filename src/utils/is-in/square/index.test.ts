import { SQUARE } from 'typings'
import isInSquare from './'

describe('isInSquare', () => {
  const square: SQUARE = [
    [1, 2, 3],
    [4, 5, 6],
    [0, 8, 9],
  ]

  it('returns true if value is in the given square', () => {
    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('returns false if value is not in the given square', () => {
    expect(isInSquare({ square, value: 7 })).toBeFalsy()
  })
})
