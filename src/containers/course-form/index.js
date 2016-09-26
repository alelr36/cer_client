import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createCourse, updateCourseBeingCreated } from 'actions/courses'
import CourseForm from './course-form'

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
