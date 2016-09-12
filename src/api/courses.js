import axios from 'axios'
import querystring from 'querystring'

export function fetchCourses() {
  return axios.get('http://localhost:8000/courses') //TODO: all urls should be envvars
}

export function createCourse(title, name, description) {
  return axios.post('http://localhost:8000/courses',
    querystring.stringify({ title, name, description })
  )
}

export function deleteCourse(id) {
  return axios.delete('http://localhost:8000/courses',
    {
      headers: {
        'X-Course-Id': id
      }
    }
  )
}
