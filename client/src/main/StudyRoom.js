import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import usersUserinfoAxios from '../token/tokenAxios';
import axios from 'axios';

function StudyRoom() {
  const { post_no } = useParams(); // 동적 라우트 매개변수 가져오기
  const [studyRoomPages, setStudyRoomPage] = useState([]);

  useEffect(() => {
    const fetchStudyRoom = async () => {
      try {
        const response = await usersUserinfoAxios.get(`/studyroom/${post_no}`);
        setStudyRoomPage(response.data);
        console.log(studyRoomPages);
      } catch (error) {
        console.log('Error fetching studyRoom: ', error);
      }
    };
    fetchStudyRoom();
  }, [post_no]); //post_no가 변경될 때마다 실행

  return (
    <div>
      <Header />
      {/*notice */}
      <div></div>

      {/*moment */}
      <div></div>
    </div>
  );
}
export default StudyRoom;
