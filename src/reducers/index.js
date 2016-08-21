import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import courses from './courses'

export default combineReducers({
  auth,
  courses,
  routing: routerReducer
})
