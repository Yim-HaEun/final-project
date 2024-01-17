import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisterUser() {
  const [data, setData] = useState([]);
  const [swithUser, setNewUser] = useState({
    email: '',
    password: '',
    username: '',
    nickname: '',
    userprofile: '',
    useraddress: '',
    userintroduction: '',
    role: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8082/users/register', {
          withCredentials: true,
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    //e 자리값 밑에 target
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8082/users/register',
        swithUser,
        {
          withCredentials: true,
        }
      );
      //변경된 데이터 값 저장
      setData((prevUser) => [...prevUser, response.data]);

      //데이터 저장되고 나서 빈값으로 초기화 하길 원한다면  초기화도 진행
      setNewUser({
        email: '',
        password: '',
        username: '',
        nickname: '',
        userprofile: '',
        useraddress: '',
        userintroduction: '',
        role: '',
      });
    } catch (error) {
      console.error('데이터가 부적합합니다.', error);
    }
  };

  return (
    <div>
      <h1> API 호출 확인</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.username} = {user.email}
          </li>
        ))}
      </ul>
      <h2>새로운 유저 저장</h2>
      <div>
        <label>회원 아이디(email) : </label>
        <input
          type="text"
          name="email"
          value={swithUser.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>비밀번호 : </label>
        <input
          type="text"
          name="password"
          value={swithUser.password}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>이름 : </label>
        <input
          type="text"
          name="username"
          value={swithUser.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>닉네임 : </label>
        <input
          type="text"
          name="nickname"
          value={swithUser.nickname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>프로필 : </label>
        <input
          type="text"
          name="userprofile"
          value={swithUser.userprofile}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>주소 : </label>
        <input
          type="text"
          name="useraddress"
          value={swithUser.useraddress}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>자기소개 : </label>
        <input
          type="text"
          name="userintroduction"
          value={swithUser.userintroduction}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          type="text"
          name="role"
          value={swithUser.role}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddUser}>유저 저장하기</button>
      <div>로그인하기</div>
    </div>
  );
}
export default RegisterUser;
