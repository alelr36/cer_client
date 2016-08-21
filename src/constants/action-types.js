import keyMirror from 'key-mirror-nested'

export default keyMirror({
  AUTH: {
    LOGIN: null,
    LOGOUT: null
  },
  COURSES: {
    FETCH: null,
    SELECT: null
  }
}, { connChar: '/' })
