import { useState, useEffect } from 'react';
import '../../css/MainPageCss.css';
import { useParams } from 'react-router-dom';
import usersUserinfoAxios from '../../token/tokenAxios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Moment = () => {
  const { post_no } = useParams();

  //select
  const [participant, setParticipant] = useState([]);
  useEffect(() => {
    const fetchMoment = async () => {
      // 토큰이 없으면 함수 실행 중단
      try {
        // 서버에 사용자 정보를 가져오는 요청
        const response = await usersUserinfoAxios.get(
          `/studyRoom/Participant/${post_no}`
        );
        //,notice,
        setParticipant(response.data);
        console.log(response.data);
        //{
        //withCredentials: true,
        //}
        //);
        //console.log(response.data);
      } catch (error) {
        //console.error("Failed to fetch user data.", error);
        console.log('값을 못불러와요', error);
      }
    };
    fetchMoment();
  }, []);

  return (
    <div>
      <div>
        <h4>참가자</h4>
      </div>
      <ul>
        {Array.isArray(participant) && participant.length > 0 ? (
          participant.map((participant) => (
            <li
              key={participant.post_no}
              style={{ display: 'inline-block', marginRight: '10px' }}
            >
              {' '}
              <div>
                <img
                  className="user_profile_img_set"
                  width="50px"
                  height="50px"
                  src={`data:image/jpeg;base64,${participant.user_profile}`}
                  alt="Profile"
                />{' '}
                <br />
                <p>{participant.nickname}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No Swith Participants available.</p>
        )}
      </ul>
    </div>
  );
};
export default Moment;
