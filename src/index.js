import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { EcommerceApp } from './EcommerceApp';
// import { EcommerceApp } from './components/ecommerce/EcommerceApp';
import './index.css';
import { store } from './store/store';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <Provider store= {store}>
    <EcommerceApp />
  </Provider>,
  document.getElementById('root')
);

