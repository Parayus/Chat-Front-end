import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import auth from './store/reducers/auth';
import friend from './store/reducers/friend';
import signup from './store/reducers/signup';
import chat from './store/reducers/chat'

import {Provider} from 'react-redux';

import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom'

const rootReducer = combineReducers({
  auth:auth,
  signup:signup,
  friend:friend,
  chat:chat
})
const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const app = (
  <Provider store = {store}>
<BrowserRouter>
<App></App>
</BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
