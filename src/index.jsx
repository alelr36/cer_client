import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { startSaga, configureStore } from './stores/configureStore'
import { setToken } from 'actions/auth'

import App from 'components/app'
import Main from 'components/main'
import Admin from 'containers/admin'
import Authenticate from 'containers/authenticate'

const store = configureStore()
startSaga()
const history = syncHistoryWithStore(browserHistory, store)

if (localStorage.jwtToken) {
  store.dispatch(setToken(localStorage.jwtToken))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/' component={Main} />
        <Route path='/login' component={Authenticate} />
        <Route path='/admin' component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('cerApp')
)
