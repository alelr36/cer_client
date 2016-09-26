import { deleteCourse } from 'actions/courses'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Course from './course'

function mapStateToProps(state) {
  return {
    selectedCourse: state.courses.selectedCourse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCourse,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)
