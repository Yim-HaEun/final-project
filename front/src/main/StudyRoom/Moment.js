import { useState, useEffect } from 'react';
import '../../css/MainPageCss.css';
import { useParams } from 'react-router-dom';
import usersUserinfoAxios from '../../token/tokenAxios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Moment = () => {
  const { post_no } = useParams();
  const [userData, setUserData] = useState('');

  const [moment, setMoment] = useState({
    post_no: '',
    user_no: '',
    moment_no: '',
    nickname: '',
    moment_picture: '',
    moment_title: '',
  });

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
        setMoment((prevUserData) => ({
          // setMoment의 user_no에 받아온 userNo 값을 넣어줌
          ...prevUserData,
          user_no: userNo,
        }));
        console.log(response.data);
      } catch (error) {
        //console.error("Failed to fetch user data.", error);
        setMoment([]);
      }
    };
    fetchUserData();
  }, []);

  //select
  const [selMoment, setSelMoment] = useState([]);

  useEffect(() => {
    const fetchMoment = async () => {
      // 토큰이 없으면 함수 실행 중단
      try {
        // 서버에 사용자 정보를 가져오는 요청
        const response = await usersUserinfoAxios.get(
          `/studyRoom/select/StudyMoment/${post_no}`,

          {
            withCredentials: true,
          }
        );

        setSelMoment(response.data);
        console.log(response.data);
      } catch (error) {
        //console.error("Failed to fetch user data.", error);
        console.log('값을 못불러와요', error);
        setMoment([]);
      }
    };
    fetchMoment();
  }, [setMoment]);

  const handleDeleteMoment = async (e, selectedMoment) => {
    e.preventDefault();
    try {
      //서버로 삭제할 데이터 보내기
      const response = await usersUserinfoAxios.post(
        `/studyRoom/delete/StudyMoment/${post_no}`,
        { ...moment, moment_no: selectedMoment.moment_no },
        // 삭제 전송
        {
          withCredentials: true,
        }
      );
      alert('삭제 성공');
      window.location.reload();
    } catch (error) {
      console.error('삭제 불가', error);
    }
  };

  return (
    <div>
      <ul className="notice_box_section">
        {Array.isArray(selMoment) && selMoment.length > 0 ? (
          selMoment.map((selMoment) => (
            <li key={selMoment.moment_no}>
              {' '}
              {/* selNotice.notice_no 를 key값으로 설정한다 */}
              <div className="study_sort_badge"></div>
              <div className="study_schedule">
                <p className="">작성일</p>
                <p>{selMoment.moment_post_date}</p>
                <br />
                <p>작성자 : </p>
                <p>{selMoment.nickname}</p>
              </div>
              <h1 className="board_title">{selMoment.moment_title}</h1>
              <div className="board_content_border"></div>
              <section className="board_info_section">
                <div>
                  <img
                    className="user_profile_img_set"
                    width="200px"
                    height="200px"
                    src={`data:image/jpeg;base64,${selMoment.moment_picture}`}
                    alt="Profile"
                  />
                </div>
                {/* 프로필 이미지 가져오는건 나중에하자 .. 
                <div className="board_info_left">
                  
                    
                    <div className="user_profile_img">
                      <img
                        className="user_profile_img_set"
                        width="30px"
                        height="30px"
                        src={board.profileImg}
                        alt="Profile"
                      />
          </div>
                  <div>{userData.nickname}</div>
                </div>*/}

                <div className="board_info_right">
                  <div className="comment_count_section">
                    {userData.user_no === selMoment.user_no && (
                      <button
                        onClickCapture={(e) => {
                          handleDeleteMoment(e, selMoment);
                        }}
                      >
                        X
                      </button>
                    )}
                  </div>
                </div>
              </section>
            </li>
          ))
        ) : (
          <p>No Swith Momentboards available.</p>
        )}
      </ul>
    </div>
  );
};
export default Moment;
