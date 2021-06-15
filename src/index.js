
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Chat } from './chat/Chat';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Chat />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);