import * as actionTypes from 'constants/action-types'

const { COURSES } = actionTypes

export function setCourses(courses) {
  return {
    type: COURSES.SET,
    courses
  }
}
