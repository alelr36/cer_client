import * as actionTypes from 'constants/action-types'
import * as coursesApi from 'api/courses'
import { createAction } from 'redux-actions'

const { COURSES } = actionTypes

export const selectCourse = createAction(COURSES.SELECT, (course) => course._id)

export const fetchCourses = createAction(COURSES.FETCH, () => {
  const promise = coursesApi.fetchCourses()

  return { promise }
}, _.identity)
