import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Swiper1 from './Swiper';
import reportWebVitals from './reportWebVitals';
import Swiper2 from './Swiper_timer';
import Swiper3 from './Swiper_text';
import Swiper4 from './Swiper_pic_loop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Swiper1 /> */}
    {/* <Swiper2 /> */}
    {/* <Swiper3 /> */}
    <Swiper4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
