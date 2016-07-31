import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import courses from './courses';

export default combineReducers({
  courses,
  routing: routerReducer
});