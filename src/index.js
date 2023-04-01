import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import store from './store/store';
import { Provider } from 'react-redux';

console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App /> 
    </Provider>
  </React.StrictMode>
);

