// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './reducers'
import Home from './containers/Home';
import Movie from './containers/Movie';
import NotFound from './containers/NotFound';

import './styles.scss';

const middlewares = [thunk];

const store = createStore( reducer, applyMiddleware(...middlewares) );

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={Movie} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>

  </Provider>,
  document.getElementById( 'app' )
)
