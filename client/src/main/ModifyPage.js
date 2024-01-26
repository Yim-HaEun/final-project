import React, { useState, useEffect } from 'react';
import usersUserinfoAxios from '../token/tokenAxios';
import Header from './Header';
import axios from 'axios';
import sample6_execDaumPostcode from './KakaoAddress';
const UpdateUser = () => {
  const [userData, setUserData] = useState([]); //주소값
  const [newUser, setNewUser] = useState('');
  const [swithUser, setUpdateUser] = useState({
    email: `${userData.email}`,
    nickname: '',
    useraddress: '',
    user_introduction: '',
    email: '',
  });

  const handleInputChange = (e) => {
    //e 자리값 밑에 target
    const { name, value } = e.target;

    setUpdateUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 서버에 사용자 정보를 가져오는 요청
        const response = await usersUserinfoAxios.get('/users/userinfo');
        setUserData(response.data); // 로그인한 토큰 이용해서 해당 유저 데이터 가져오는거
        console.log(userData);
      } catch (error) {
        console.error('Failed to fetch user data.', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await usersUserinfoAxios.post(
        'http://localhost:8080/users/updateUser',
        swithUser,
        {
          withCredentials: true,
        }
      );
      userData((prevUser) => [...prevUser, response.data]);
    } catch (error) {
      console.error('수정 불가', error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 선택한 파일
    const reader = new FileReader();

    reader.onloadend = () => {
      setUpdateUser((prevUser) => ({ ...prevUser, img: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />

      <br></br>
      <h4>비밀번호</h4>

      <h4>닉네임</h4>
      <div>
        <input
          type="text"
          name="nickname"
          value={setUserData.nickname}
          onChange={handleInputChange}
        />
      </div>
      <h4>프로필</h4>

      <h4>주소</h4>
      <div>
        <input type="text" id="useraddress" />
        <input
          name="useraddress"
          className="btn round"
          style={{
            backgroundColor: '#ffffb5',
            width: '150px',
            height: '50px',
            margin: '10px',
            marginTop: '5px',
            borderRadius: '30px',
          }}
          type="button"
          value="주소 찾기"
          onClick={() => sample6_execDaumPostcode({ setNewUser })}
        />
      </div>
      <h4>자기소개</h4>
      <div>
        <input
          type="text"
          name="user_introduction"
          value={setUserData.user_introduction}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleUpdateUser}
        type="button"
        name="login"
        className="btn round"
        style={{
          backgroundColor: '#75ddff',
          width: '200px',
          height: '50px',
          margin: '10px',
          marginTop: '20px',
          marginBottom: '10px',
          borderRadius: '30px',
        }}
      >
        수정
      </button>
    </div>
  );
};

export default UpdateUser;
