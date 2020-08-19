import { GRID, BLOCK_COORDS } from 'typings'

export interface IReducer {
  challengeGrid?: GRID
  solvedGrid?: GRID
  selectedBlock?: BLOCK_COORDS
  workingGrid?: GRID
}
