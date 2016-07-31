import keyMirror from 'key-mirror-nested';

export default keyMirror({
  APP: {},
  COURSES: {
    FETCH: null,
    SET: null
  }
}, { connChar: '/' });