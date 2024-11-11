import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseTab from './UseTab';
import reportWebVitals from './reportWebVitals';
import UseTitle from './UseTitle';
import UseClick from './UseClick';
import UseInput from './UseInput';
import UseConfirm from './UseConfirm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseInput /> */}
    {/* <UseTab /> */}
    {/* <UseTitle /> */}
    {/* <UseClick /> */}
    <UseConfirm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
