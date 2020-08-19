import { AnyAction, Action } from 'redux'

import { BLOCK_COORDS, NUMBER } from 'typings'

import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  type: types.SELECT_BLOCK,
  selectedBlock: coords,
})

export const fillBlock = (value: NUMBER, coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
})
