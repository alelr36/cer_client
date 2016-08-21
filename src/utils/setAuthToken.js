import axios from 'axios'

export default function setAuthToken(token) {
  /* eslint-disable dot-notation */
  if (!!token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
  /* eslint-disable dot-notation */
}
