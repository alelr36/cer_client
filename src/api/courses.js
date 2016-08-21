import axios from 'axios'

export function fetchCourses() {
  return axios.get('https://cer-server.herokuapp.com/courses')
}
