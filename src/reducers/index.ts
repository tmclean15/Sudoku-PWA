import reducer from './reducer'
export { createGrid, selectBlock, fillBlock } from './actions'
export type IReducer = ReturnType<typeof reducer>
export default reducer
