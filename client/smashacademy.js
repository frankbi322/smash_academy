import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Grid from './components/Grid';
import Single from './components/Single';

import { Provider } from 'react-redux';
import store, { history } from './store';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Grid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

render(
  router, document.getElementById('root')
)
