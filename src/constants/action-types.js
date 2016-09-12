import keyMirror from 'key-mirror-nested'

export default keyMirror({
  AUTH: {
    LOGIN: null,
    SET_TOKEN: null,
    LOGOUT: null
  },
  COURSES: {
    FETCH: null,
    SELECT: null,
    CREATE: null,
    DELETE: null,
    UPDATE_CREATED: null
  }
}, { connChar: '/' })
