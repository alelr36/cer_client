import axios from 'axios'
import querystring from 'querystring'

export function submitLogin(username, password) {
  return axios.post('http://localhost:8000/authenticate',
    querystring.stringify({ username, password })
  )
}
