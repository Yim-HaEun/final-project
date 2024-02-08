import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usersUserinfoAxios from '../../token/tokenAxios';
import './css/StudyRoomTitle.css';
const StudyRoomTitle = () => {
  const { post_no } = useParams();
  const [userData, setUserData] = useState('');
  const [studyRoomTitle, setStudyRoomTitle] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      // 토큰이 없으면 함수 실행 중단
      try {
        // 서버에 사용자 정보를 가져오는 요청
        const response = await usersUserinfoAxios.get('/users/userinfo');
        const userNo = response.data.user_no;

        setUserData((prevUserData) => ({
          ...prevUserData,
          user_no: userNo,
        }));
        setStudyRoomTitle((prevUserData) => ({
          // setMoment의 user_no에 받아온 userNo 값을 넣어줌
          ...prevUserData,
          user_no: userNo,
        }));
      } catch (error) {
        //console.error("Failed to fetch user data.", error);
        setStudyRoomTitle([]);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchStudyRoomTitle = async () => {
      try {
        const response = await usersUserinfoAxios.get(
          `/studyRoom/Title/${post_no}`
        );
        //,notice,
        setStudyRoomTitle(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('값을 못불러와요', error);
      }
    };
    fetchStudyRoomTitle();
  }, []);

  return <div className="StudyRoomTitle">{studyRoomTitle.study_title}</div>;
};
export default StudyRoomTitle;
