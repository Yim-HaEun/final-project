import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginAxios from './token/tokenAxios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await LoginAxios.post('/users/signin', {
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem('token', token);
      console.log('Login successful. Token:', token);
      navigate('/dashboard'); // 이동 경로 수정
    } catch (error) {
      console.error('Login failed.', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
