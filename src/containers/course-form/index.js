import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CourseForm from './course-form'
import { createCourse } from 'actions/courses'

function mapStateToProps(state) {
  return {
    newCourse: ''// TODO: Add the newCourse fields to the global state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createCourse,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)
