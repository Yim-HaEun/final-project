import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginUser from './SwithUser/LoginUser';
import Dashboard from './SwithUser/Dashboard';
import RegisterUser from './SwithUser/RegisterUser';

const App = () => {
  return (
    <Routes>
      {/*<Route path="/" element={<RegisterUser />} />*/}
      <Route path="/" element={<LoginUser />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
