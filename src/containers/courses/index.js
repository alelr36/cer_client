import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCourse, fetchCourses } from 'actions/courses'
import Courses from './courses'

function mapStateToProps(state) {
  return {
    courses: state.courses.coursesList,
    selectedCourse: state.courses.selectedCourse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCourse,
    fetchCourses
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
