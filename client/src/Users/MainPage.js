import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function App() {
  const [isLogin, setIsLogin] = useState(false); //로그인 안되어있으면 false 되어있으면 true

  useEffect(() => {
    if (sessionStorage.getItem('userEmail') === null) {
      console.log('isLogin ? :: ', isLogin); //sessionStorage에 userEmail 키값이 있으면
    } else {
      setIsLogin(true);
      console.log('isLogin ?? :: ', isLogin);
    }
  }, [isLogin]);
  return (
    <div>
      {isLogin ? (
        <Link to={`/MainPage`}>{sessionStorage.getItem('userEmail')}</Link>
      ) : (
        <Link to={`/Login`}>로그인</Link>
      )}
    </div>
  );
}

export default App;
