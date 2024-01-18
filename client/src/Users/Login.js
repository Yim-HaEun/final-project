import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setinputPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8082/users/register', {
          withCredentials: true,
        });
        setInputEmail(res.data.email);
        setinputPassword(res.data.password);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setinputPassword(e.target.value);
  };
  const onClickLogin = () => {
    console.log('login');
    console.log('이메일 : ', inputEmail);
    console.log('비밀번호 : ', inputPassword);

    axios
      .post('http://localhost8082/users/login', {
        email: inputEmail,
        password: inputPassword,
      })
      .then((res) => {
        console.log(res);
        console.log('res.data.email :: ', res.data.email);
        console.log('res.data.msg :: ', res.data.msg);
        if (res.data.email === undefined) {
          console.logi('.....', res.data.msg);
          alert('입력한 email이 일치 또는 존재하지 않습니다.');
        } else if (res.data.email == null) {
          console.log('.....', '입력하신 비밀번호가 일치하지 않습니다.');
          alert('입력한 비밀번호가 일치하지 않습니다.');
        } else if (res.data.email === inputEmail) {
          console.log('.....로그인 성공');
          sessionStorage.setItem('userEmail', inputEmail); //sessionStorage에 이메일은 userEmail key값으로 저장
          sessionStorage.setItem('userPassword', inputPassword);
        }
        document.location.href = '/'; //작업 완료 후 페이지 이동
      })
      .catch();
  };

  return (
    <div>
      <h1>로그인하기</h1>

      <div>
        <label>회원 아이디(email) : </label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
      </div>
      <div>
        <label>비밀번호 : </label>
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          value={inputPassword}
          onChange={handleInputPassword}
        />
      </div>
      <button type="button" onClick={onClickLogin}>
        로그인하기
      </button>
    </div>
  );
}
export default Login;
