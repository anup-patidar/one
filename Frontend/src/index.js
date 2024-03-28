import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import TimeAgo from 'javascript-time-ago'
import store from './app/store'
import en from 'javascript-time-ago/locale/en'
import { Provider } from "react-redux";

TimeAgo.addDefaultLocale(en)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();