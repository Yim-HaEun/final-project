import React, { useEffect, useState } from 'react';
import usersUserinfoAxios from './token/tokenAxios'; // axios 설정 파일 import

const MyPage = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 서버에 사용자 정보를 가져오는 요청
        const response = await usersUserinfoAxios.get('/users/userinfo');
        setUserData(response.data.email);
        console.log(response.data.username);
        console.log(response.data.email);
        console.log();
      } catch (error) {
        console.error('Failed to fetch user data.', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <p>
            Welcome to the Dashboard, {userData.username}! You are logged in.
          </p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default MyPage;
