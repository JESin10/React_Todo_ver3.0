import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./redux /config/configStore"; 
import Router from './shared/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // provider? app이라는 컴포넌트가 porvider의 지배권 안에 들어옴. 
  // store로 만든 중앙데이터관리소를 앱컴포넌트 하부에서 스토어를 사용할 수 있다.
  <Provider store = {store}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Provider>
);

reportWebVitals();
