import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppTodo from './App';

import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTodo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
