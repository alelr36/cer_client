import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';

import App from 'components/app';
import Main from 'components/main/main';
import Admin from 'components/admin';

const courses = [
  { title: 'Some other track', name: 'My name 1', description: 'asdasd' },
  { title: 'Some other track', name: 'My name 2', description: 'asdasd' },
  { title: 'Some other track', name: 'My name 3', description: 'asdasd' },
  { title: 'Some other track', name: 'My name 4', description: 'asdasd' },
  { title: 'Some other track', name: 'My name 5', description: 'asdasd' },
  { title: 'Some other track', name: 'My name 6', description: 'asdasd' }
];

const store = configureStore();
store.dispatch(actions.setCourses(courses));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/' component={Main} />
        <Route path='/admin' component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('cerApp')
);
