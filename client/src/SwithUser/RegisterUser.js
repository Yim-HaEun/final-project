import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 인증완료된 순간() 값이 넣어져야함.
// 이메일 === 입력해놓고 회원가입하기 하는 text값이랑 같을때만
function RegisterUser() {
  const [data, setData] = useState([]);

  const [confirm, setConfirm] = useState('');

  const [number, setNumber] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [] = useState();
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

  const handleInputChange = (e) => {
    //e 자리값 밑에 target
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEmail = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8082/users/mail',
        swithUser,
        {
          withCredentials: true,
        }
      );
      setData((prevUser) => [...prevUser, response.data]);
      setConfirm(response.data);
      alert('인증번호가 전송되었습니다.');
    } catch (error) {
      console.error('이메일이 부적합합니다.', error);
    }
  };

  const handleConfirm = async () => {
    //변경된 데이터 값 저장
    console.log(confirm);
    console.log(number);

    setConfirm(number);

    if (confirm === number) {
      alert('인증 완료, 사용가능한 이메일입니다.');
      //전송한 이메일 값을 a에 담아주기
      // 발송하기 누를때 보내진 이메일 == 인증완료 누를때 input창에있는 이메일이랑 같을 경우 비활성화하기
    } else {
      alert('인증 번호가 다릅니다.');
      console.error('인증 실패');
    }
    setIsButtonDisabled(true);
  };

  const handleNumberChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  }; //값을 담아주는 곳

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
      <h2>새로운 유저 저장</h2>
      <div>
        <label>회원 아이디(email) : </label>
        <input
          type="text"
          name="email"
          value={swithUser.email}
          onChange={handleInputChange}
        />
        <button onClick={handleEmail}>이메일 인증하기</button>

        <br />

        <input
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
        />
        <button disabled={isButtonDisabled} onClick={handleConfirm}>
          인증확인
        </button>
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
    </div>
  );
}

export default RegisterUser;
