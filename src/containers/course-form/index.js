import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CourseForm from './course-form'
import { createCourse, updateCourseBeingCreated } from 'actions/courses'

function mapStateToProps(state) {
  return {
    course: state.courses.newCourse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createCourse,
    updateCourseBeingCreated
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)
