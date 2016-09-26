import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout, redirect } from 'actions/auth'
import Admin from './admin'

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
