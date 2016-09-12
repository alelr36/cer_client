import { handleActions } from 'redux-actions'
import * as actionTypes from 'constants/action-types'

const { COURSES } = actionTypes

const initialState = {
  coursesList: [],
  selectedCourse: '',
  newCourse: {}
}

export default handleActions({
  [`${COURSES.SELECT}`]: (state, action) => ({
    ...state,
    selectedCourse: action.payload
  }),
  [`${COURSES.FETCH}`]: (state) => ({
    ...state,
    coursesList: [],
    selectedCourse: {}
  }),
  [`${COURSES.FETCH}_FULFILLED`]: (state, action) => ({
    ...state,
    coursesList: action.payload.data.courses,
    selectedCourse: action.payload.data.courses.length ? action.payload.data.courses[0]._id : ''
  }),
  [`${COURSES.FETCH}_REJECTED`]: (state) => ({
    ...state,
    coursesList: []
  }),
  [`${COURSES.CREATE}_FULFILLED`]: (state, action) => ({
    ...state,
    coursesList: _.concat(state.coursesList, action.payload.data.course),
    newCourse: {}
  }),
  [`${COURSES.DELETE}_FULFILLED`]: (state, action) => ({
    ...state,
    coursesList: _.filter(state.coursesList, (c) => action.payload.data.course._id !== c._id)
  })
}, initialState)
