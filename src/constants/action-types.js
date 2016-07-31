import keyMirror from 'key-mirror-nested'

export default keyMirror({
  APP: {
    LOGIN: null,
    LOGOUT: null
  },
  COURSES: {
    FETCH: null,
    SET: null
  }
}, { connChar: '/' })
