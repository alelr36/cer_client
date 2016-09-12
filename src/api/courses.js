import axios from 'axios'
import querystring from 'querystring'

export function fetchCourses() {
  // TODO: all urls should be envvars
  return axios.get('https://cer-server.herokuapp.com/courses')
}

export function createCourse(title, name, description) {
  return axios.post('https://cer-server.herokuapp.com/courses',
    querystring.stringify({ title, name, description })
  )
}

export function deleteCourse(id) {
  return axios.delete('https://cer-server.herokuapp.com/courses',
    {
      headers: {
        'X-Course-Id': id
      }
    }
  )
}
