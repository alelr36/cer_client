import axios from 'axios'
import querystring from 'querystring'

export function submitLogin(username, password) {
  return axios.post('https://cer-server.herokuapp.com/authenticate',
    querystring.stringify({ username, password }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
}
