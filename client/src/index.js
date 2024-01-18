import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RegisterUser from './Users/RegisterUser';
//import Login from './Users/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterUser />
    {/*<Login />*/}
  </React.StrictMode>
);

reportWebVitals();
