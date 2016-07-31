import { handleActions } from 'redux-actions'
import * as actionTypes from 'constants/action-types'

const { COURSES } = actionTypes

const initialState = {}

export default handleActions({
  // [`${COURSES.PROP}_FULFILLED`]
  [COURSES.SET]: (state, action) => ({
    ...state,
    coursesList: action.courses
  }),
  [COURSES.FETCH]: (state) => state
}, initialState)
