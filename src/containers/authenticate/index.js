import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Authenticate from './authenticate'
import { submitLogin } from 'actions/auth'

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitLogin
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate)
