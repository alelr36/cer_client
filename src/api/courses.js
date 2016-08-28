import axios from 'axios'

export function fetchCourses() {
  return axios.get('https://cer-server.herokuapp.com/courses')
}

export function createCourse(title, name, description) {
  debugger
  return axios.post('https://cer-server.herokuapp.com/courses', {
    data: {
      title,
      name,
      description
    }
  })
}