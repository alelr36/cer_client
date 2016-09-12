import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Admin from './admin'
import { logout, redirect } from 'actions/auth'

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout,
    redirect
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
