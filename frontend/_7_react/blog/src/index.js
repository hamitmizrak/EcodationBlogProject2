import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserRegister from './component/UserRegister';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <UserRegister />

  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
