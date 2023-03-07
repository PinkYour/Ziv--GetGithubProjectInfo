import { applyMiddleware, legacy_createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Index from './reducers'
export type rootState=ReturnType<typeof Index>

export default legacy_createStore(Index,composeWithDevTools(applyMiddleware()))