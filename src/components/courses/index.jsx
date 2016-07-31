import React from 'react';
import { connect } from 'react-redux';
import Courses from './presenter';

function mapStateToProps(state) {
  const courses = state.courses.coursesList;
  return {
    courses
  }
}

export default connect(mapStateToProps)(Courses);