import React, { useState, useEffect } from 'react';
import axios from 'axios';
function MyPage() {
  const [userData, setUserData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    userintroduction: '',
    password: '',
    confirmPassword: '', // 추가된 부분
    useraddress: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8082/users/my-page', {
          withCredentials: true,
        });
        setUserData(res.data);
        setEditedData({
          userintroduction: res.data.userintroduction,
          password: '',
          confirmPassword: '', // 추가된 부분
          useraddress: res.data.useraddress,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleEditToggle = () => {
    setEditMode(!editMode);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSaveChanges = async () => {
    try {
      // 비밀번호와 비밀번호 확인이 다를 경우 예외 처리
      if (editedData.password !== editedData.confirmPassword) {
        throw new Error('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      }
      await axios.put('http://localhost:8082/users/update', editedData, {
        withCredentials: true,
      });
      // 업데이트 후 데이터 다시 불러오기
      const res = await axios.get('http://localhost:8082/users/my-page', {
        withCredentials: true,
      });
      setUserData(res.data);
      setEditMode(false);
    } catch (error) {
      console.error('데이터 업데이트에 실패했습니다.', error.message);
    }
  };
  const handleWithdrawal = async () => {
    try {
      const confirmWithdrawal =
        window.confirm('정말로 회원을 탈퇴하시겠습니까?');
      if (confirmWithdrawal) {
        await axios.delete('http://localhost:8082/users/withdrawal', {
          withCredentials: true,
        });
        // 회원 탈퇴 후 로그아웃 등 필요한 작업 수행
        window.location.href = '/logout'; // 예시: 로그아웃 후 홈페이지로 이동
      }
    } catch (error) {
      console.error('회원 탈퇴에 실패했습니다.', error);
    }
  };
  return (
    <div>
      <h1>마이 페이지</h1>
      <ul>
        {userData && userData.length > 0 ? (
          userData.map((user) => (
            <li key={user.id}>
              <h2>{user.username}</h2>
              <p>닉네임: {user.nickname}</p>
              <p>프로필: {user.userprofile}</p>
              <p>
                자기 소개:{' '}
                {editMode ? (
                  <input
                    type="text"
                    name="userintroduction"
                    value={editedData.userintroduction}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.userintroduction
                )}
              </p>
              <p>
                비밀번호:{' '}
                {editMode ? (
                  <input
                    type="password"
                    name="password"
                    value={editedData.password}
                    onChange={handleInputChange}
                  />
                ) : (
                  '******' // 실제 비밀번호는 보여주지 않도록 처리
                )}
              </p>
              {/* 추가된 부분 시작 */}
              <p>
                비밀번호 확인:{' '}
                {editMode ? (
                  <input
                    type="password"
                    name="confirmPassword"
                    value={editedData.confirmPassword}
                    onChange={handleInputChange}
                  />
                ) : (
                  '******'
                )}
              </p>
              {/* 추가된 부분 끝 */}
              <p>
                주소:{' '}
                {editMode ? (
                  <input
                    type="text"
                    name="useraddress"
                    value={editedData.useraddress}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.useraddress
                )}
              </p>
              <p>역할: {user.role}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      {editMode ? (
        <button onClick={handleSaveChanges}>저장</button>
      ) : (
        <>
          <button onClick={handleEditToggle}>수정하기</button>
          <button onClick={handleWithdrawal}>회원 탈퇴</button>
        </>
      )}
    </div>
  );
}
export default MyPage;
