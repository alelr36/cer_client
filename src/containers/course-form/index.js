import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CourseForm from './course-form'
import { redirect } from 'actions/auth'

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    redirect
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)
