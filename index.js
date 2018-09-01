import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import multiFormReducer from "./metadata/reducer/multiformreducer";
import App from './metadata/App';

const rootReducer = combineReducers({
  multiFormReducer,
  form: formReducer
});


const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('equipment-metadata')
);
