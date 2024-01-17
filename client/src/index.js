import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RegisterUser from './Users/RegisterUser';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterUser />
  </React.StrictMode>
);

reportWebVitals();
