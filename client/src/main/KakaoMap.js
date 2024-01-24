import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/KakaoMap.css';
import usersUserinfoAxios from '../token/tokenAxios';
const KakaoMap = () => {
  const [userData, setUserData] = useState([]); //주소값

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
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=89730aca4ca56bd725e48019977366cc&autoload=false';

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');

        const mapOption = {
          //맵
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 지도의 중심좌표가 나의 집이 되어야함
          level: 4,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const geocoder = new window.kakao.maps.services.Geocoder(); //주소- 좌표 변환 객체
        // userData.useraddress 로그인한 유저의 DB에저장된 Address 부분
        geocoder.addressSearch(userData.useraddress, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            //정상적으로 검색이 완료 되면
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            ); //좌표 받기

            const marker = new window.kakao.maps.Marker({
              //마커로 표시
              map: map,
              position: coords,
            });
            //infowindow로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">나의 집</div>',
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
          }
        });
      });
    };
  });

  return (
    <div className="container">
      <div className="mt-5 px-5">
        <div className="adress_section">
          <h1 className="banner_font">{userData.useraddress}</h1>
          <br />
        </div>

        <div
          id="map"
          style={{
            width: '100%',
            height: '450px',
            borderRadius: '30px',
            border: '5px solid #b9eeff',
          }}
        ></div>
      </div>
    </div>
  );
};

export default KakaoMap;
