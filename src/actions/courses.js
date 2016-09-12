import * as actionTypes from 'constants/action-types'
import * as coursesApi from 'api/courses'
import { createAction } from 'redux-actions'

const { COURSES } = actionTypes

export const selectCourse = createAction(COURSES.SELECT, (course) => course._id)

export const updateCourseBeingCreated = createAction(COURSES.UPDATE_CREATED, (course) => course)

export const fetchCourses = createAction(COURSES.FETCH, () => {
  const promise = coursesApi.fetchCourses()

  return { promise }
}, _.identity)

export const createCourse = createAction(COURSES.CREATE, (course) => {
  const promise = coursesApi.createCourse(course.title, course.name, course.description)

  return { promise }
})

export const deleteCourse = createAction(COURSES.DELETE, (courseId) => {
  const promise = coursesApi.deleteCourse(courseId)

  return { promise }
})
