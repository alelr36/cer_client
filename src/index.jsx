import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { startSaga, configureStore } from './stores/configureStore'
import setAuthToken from 'utils/setAuthToken'

import App from 'components/app'
import Main from 'components/main/main'
import CourseForm from 'containers/course-form'
import Authenticate from 'containers/authenticate'

const store = configureStore()
startSaga()
const history = syncHistoryWithStore(browserHistory, store)

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/' component={Main} />
        <Route path='/login' component={Authenticate} />
        <Route path='/admin' component={CourseForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('cerApp')
)
