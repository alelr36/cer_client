import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCourse, fetchCourses } from 'actions/courses'
import CoursesList from './courses-list'

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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList)
