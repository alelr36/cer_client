import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from "react-router";

import Main from 'components/main/main';
import Admin from 'components/admin/admin';
import Form from 'components/admin/course-form';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/admin" component={Admin} />
    <Route path="/form" component={Form} />
  </Router>,
  document.getElementById('cerApp')
);
