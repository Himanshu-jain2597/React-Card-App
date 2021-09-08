import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import configStore from "../src/config-store";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.scss";

const store = configStore();

ReactDOM.render(
  <Provider store = {store}>
    <Layout />
    </Provider>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
