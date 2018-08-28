import { combineReducers } from 'redux'
import {
  SET_NAME
} from './actions'

function name (state = 'World', action) {
  switch (action.type) {
    case SET_NAME:
      return action.name
    default:
      return state
  }
}

const rootReducer = combineReducers({
  name
})

export default rootReducer
