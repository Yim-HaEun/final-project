# SpringBoot + React 프로젝트 
자신의 주소를 기반으로 스터디원을 구하는 사이트입니다.
![mainpage](https://github.com/user-attachments/assets/bc44c2ed-7885-4280-8963-df248a250149)
## 개발 기간
2024.01.16 ~ 2024.02.14
## 팀원
- 임하은(조장) : 회원가입, 로그인(spring security), 로그아웃, 회원정보 수정, 회원 탈퇴, 관리자 페이지, 진행중 스터디 방, 채팅 
- 정선아 : 지도 api, 메인페이지, 게시글 작성 페이지, 게시글 댓글, 게시글 수정, 마이페이지
- 이미혜 : DB & sql, 메인페이지, 찜하기, 검색, 스터디 신청, footer 상세, ppt
- 박창규 : DB & sql, 로그인(spring security), 알림함, 타인 프로필 정보, 채팅, 스터디 신청
- 안승애 : <frontend> css 담당, 게시글 검색, 카테고리, 게시글 작성 페이지, 기술스택, 신청 현황
## 개발 환경
<div>
 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
 <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
</div>
<div>
 <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"/> 
 <img src="https://img.shields.io/badge/MyBatis-007396?style=for-the-badge&logo=MyBatis&logoColor=white"/>
 <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache&logoColor=black"/>
 <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
 <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
 
</div>
 
<div>
 <img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"> 
 <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazon aws&logoColor=white"> 
</div>
 <div>
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
</div>
<div>

 언어: Java,HTML5/CSS,JavaScript   프론트엔드 도구 : Node.js, npm        

 서버 : SpringBoot 3.2.1    
 
 프레임워크 : Spring Framework 6.x, MyBatis 3.0.3 

 DB : Oracle 11g 

IDE : Eclipse 2023.12, VisualStudio 

API : Restful API(JSON)   

라이브러리 : React  

빌드 도구 : Maven

</div>

## ERD

![깃헙리드미파이널3](https://github.com/user-attachments/assets/e080a52e-54c9-4b80-8873-94bda3d92b35)

## 내 구현 기능 
<details>
<summary>회원가입 페이지 </summary>
<div markdown="1">  
    
![signup](https://github.com/user-attachments/assets/9f2fc1ce-1a59-485d-bcff-4cd6e225adb5)

<details>
    <summary>1.이용약관 </summary>
    <div markdown = "1">
     
![terms](https://github.com/user-attachments/assets/eab10c0e-2685-4d61-9619-58296c1e903b)
        
    - 모두 동의해야만 가입할 수 있다.
    - 전체동의 버튼을 누르면 자동으로 모든 체크박스가 true로 바뀜.
</div>
</details>
 
<details>
  <summary>2.이메일 인증</summary>
    <div markdown="1">
        
![emailauth](https://github.com/user-attachments/assets/42874548-0494-4bfa-99dd-49ede520f484)
![auth](https://github.com/user-attachments/assets/50ed54be-49ab-46df-aec3-acdd4afdde8b)
![lockedbutton](https://github.com/user-attachments/assets/88c60aa4-f346-4526-9c08-0654b21722f1)
 
    인증 완료 후, 버튼이 잠김.
  
</div>
</details>
<details>
  <summary>3.비밀번호 조건 및 일치</summary>
<div markdown="1">

 ![password](https://github.com/user-attachments/assets/b3493ce9-9bdc-432c-a82d-5446b479c556)
![pass](https://github.com/user-attachments/assets/4be6fb16-8216-4658-9c78-5618441a9424)

</div>
</details>
<details>
  <summary>4.닉네임 중복 확인</summary>
<div markdown="1">

 ![nickname](https://github.com/user-attachments/assets/f2d4a25b-99ca-4af7-9c10-1e0afef1938f)

![nickname alarm](https://github.com/user-attachments/assets/870ca16e-3f2a-4c5b-94f5-8d3fb179884f)

</div>
</details>
<details>
  <summary>5.프로필 설정, 내 주소 찾기 api </summary>
<div markdown="1">

 ![address](https://github.com/user-attachments/assets/b58bebd8-caec-4190-8b46-4804aca257f1)

![add](https://github.com/user-attachments/assets/b4edf6a6-f0ca-46b0-9665-01d595134c78)
   
</div>
</details>
    
    
</div>
</details>

-----------------------

<details>
<summary>로그인 페이지 및 로그아웃</summary>
<div markdown="1">       

 ![loginPage](https://github.com/user-attachments/assets/225da279-ccb4-498e-8964-9895fb085f8e)

![loginvs](https://github.com/user-attachments/assets/0197f2ef-7986-44ea-bb90-550c897dc622)
     
    로그인 후, 자신의 주소 마커가 찍히고 스터디를 구하고있는 만남 장소가 뜬다. 
    카페 마크 클릭시 게시글로 이동.
</div>
</details>

-----------------------

<details>
<summary>아이디,비밀번호 찾기</summary>
<div markdown="1">       

 ![IDPassword](https://github.com/user-attachments/assets/ceec1ad7-034c-49fd-a4ae-55566b8bb699)
   
![passwordsearch](https://github.com/user-attachments/assets/7997c64c-e083-4382-a58b-e61905d82359)
    
    - 비밀번호는 이메일 인증 후, 비밀번호 재설정으로
    
</div>
</details>

-----------------------

<details>  
<summary>회원 정보 수정 및 탈퇴</summary> 
<div markdown ="1">
   
1.수정 

![profile](https://github.com/user-attachments/assets/49beb6bf-facb-4b4f-b756-e6827f386542)
![eedit](https://github.com/user-attachments/assets/cf302011-727c-4c75-b132-eef889e37aea)
![p](https://github.com/user-attachments/assets/ea92af2c-788c-4d3c-bc3f-874d22ce6d85)

2.탈퇴
    
![image](https://github.com/user-attachments/assets/c8976602-ce57-4b48-8943-d226f992f3d3)
</div>    
</details>
 
 -----------------------

<details>
<summary>진행중 스터디방 </summary> 
<div markdown="1">

 ![myStudyRoom](https://github.com/user-attachments/assets/b8c248e3-cba6-4ee5-b027-5d172c6d0b90)

![SWITH MOMENT](https://github.com/user-attachments/assets/a0fa4622-10ef-4f6a-b790-e3c2e3f450b8)

<details>
    <summary> 1.스터디방 이름 수정  </summary>
 <div markdown ="1">
     
![editTitle](https://github.com/user-attachments/assets/49f8f670-69e9-43c3-90f1-835dced20c44)
    
       방장만 수정 가능하다.
</div>
</details>
<details>
    <summary> 2. 참여 프로필  </summary>
 <div markdown ="1">
    
    
![members](https://github.com/user-attachments/assets/f05a11c5-856d-4ca6-b1a4-721a34aebb1d)
     
      프로필 이미지를 누르면 프로필 정보를 볼 수 있다.
</div>
</details>
<details>
    <summary> 3.D-day </summary>
 <div markdown ="1">

  ![d-day](https://github.com/user-attachments/assets/2f2d271a-8d30-4d94-8149-705afd2ab5a9)
   
     스터디원을 구할 때, 공부 기간을 정하기 때문에 시작일을 기준으로 d-day를 보여준다.
</div>
</details>
<details>
    <summary> 4.Todo </summary>
 <div markdown ="1">
 
![calendar](https://github.com/user-attachments/assets/dedc72de-da51-4798-adc8-c909b8804937)
    
     달력을 눌러 todo 리스트를 보거나 추가할 수 있다.

![todolist](https://github.com/user-attachments/assets/2a2e7c4c-5175-496e-9f3a-46034a0019a9)

![writetodo](https://github.com/user-attachments/assets/e1d3adcf-65da-4f35-b887-ab210b2ff197)
    todo+ 버튼을 눌러 작성
</div>
</details>
<details>
    <summary> 5.공지글</summary>
 <div markdown ="1">
     
     공지글+ 버튼을 눌러 모달창이 뜨면 내용을 입력하고 비밀 번호를 설정하면 된다
     
  ![notice](https://github.com/user-attachments/assets/e11cef3d-fd28-4c07-bda8-b748eae9dcce)
       글 삭제는 비밀번호를 입력해 삭제한다.
</div>
</details>
<details>
    <summary> 6.채팅</summary>
 <div markdown ="1">

  ![chatting](https://github.com/user-attachments/assets/18238365-1e60-459a-83a2-99af850c1655)
    
    스터디방의 조원들이 실시간으로 채팅을 할 수 있다.
  </div>
</details>
<details>
    <summary>7. S.with moment</summary>
    <div markdown ="1">
 
![SWITH MOMENT](https://github.com/user-attachments/assets/4cbdefae-db4d-496c-abcf-b75d52b44d66)

![modalmoment](https://github.com/user-attachments/assets/190a4b3b-5e66-4c35-b3d8-1f8d49549206)
    
    모달창으로 사진과 제목을 추가
![deletemoment](https://github.com/user-attachments/assets/458e4c68-7131-4bb6-ae58-41f425eecb36)
    
    작성자만 삭제할 수 있다.
</div>
</details>

-----------------------

<details>
<summary>관리자 페이지 </summary>
<div markdown = "1">

 ![admin](https://github.com/user-attachments/assets/d158490a-e4f6-4e74-ad13-36c6b62196a7)
      
       관리자에게만 보이는 관리자페이지 버튼
1.유저 검색

![adminsearch](https://github.com/user-attachments/assets/fad8dd6d-1198-48b5-b626-c890447a984b)
    
    닉네임으로 유저의 게시글 목록,댓글,유저 정보를 볼 수 있다.
    
2.탈퇴 대기 유저 
    
    스터디방에서 탈퇴 유저는 다른 유저들에겐 (이름없음)으로 뜨고 탈퇴유저는 더이상 그 아이디로 로그인하지 못한다. (update)
     
![db](https://github.com/user-attachments/assets/5dc21496-31cc-4c19-88fd-3bd5df1cbbb3)
     
     탈퇴유저가 방장이거나 중요한 정보들이 스터디 진행 중 삭제되면 안되기 때문에,
     활동중인 스터디방이 존재하는 유저는 탈퇴대기 목록으로 들어가고
![waiting](https://github.com/user-attachments/assets/3b72584c-a846-4a11-acdc-10aea251b52d)
     
     활동 중인 스터디방이 없을때, 관리자가 승인해 데이터를 삭제함.(delete)
</div>    
</details>
   
</div>    
</details>

## S.with 홈페이지 설명

 <details>
     <summary>메인페이지</summary>
     <div markdown = "1">
         
![mainpage](https://github.com/user-attachments/assets/8bc1a744-26f8-4e0d-9b0a-d7d054d273fc)
    
    집 주소 마크가 뜨고 주변 카페 마크를 클릭하면 
    그곳의 스터디 구인 공고 글을 볼 수 있다.
    
![toggle](https://github.com/user-attachments/assets/4bd98b60-ba78-4c47-81a9-864dbdac3151)

![mogodb](https://github.com/user-attachments/assets/95eec2fd-2f76-4ad1-b808-57f0e5659d9a)
    
    자신이 배우고싶은 기능들을 위주로 검색 가능. (복수 검색 가능)
![area](https://github.com/user-attachments/assets/d9b3a9ec-5329-4ed1-84f5-94eb9d59d100)
   
    서울 지역을 기준으로 주변 스터디를 검색 가능
    
![searchtitle](https://github.com/user-attachments/assets/59862cb1-f774-4bc9-8dd5-d7cd7793ade3)
   
    내용이나 제목으로 검색 가능

![heart](https://github.com/user-attachments/assets/5c470d5c-3109-49d1-918d-1e1dcff3d74f)
    
    찜하기를 누르면 마이페이지의 '내가 찜한 스윗' 리스트에 들어간다.
</div>
 </details>
  <details>
     <summary>게시글 작성 페이지</summary>
     <div markdown = "1">

![post](https://github.com/user-attachments/assets/18b762da-5eca-463c-af10-39f7ebe82e7d)

![createposting](https://github.com/user-attachments/assets/6b01b0c5-2f51-47db-9960-b7339f8d4859)
    
      
      작성완료 버튼을 누르면 알람창이 뜨고 메인페이지로 이동
![comment](https://github.com/user-attachments/assets/b7481718-5c16-4408-afd1-3aa6dc9039cd)
    
    작성자에게만 게시글 삭제 버튼이 뜬다.
    
    댓글은 댓글 작성자만 삭제할 수 있다.
    
</div>
 </details>
 <details>
     <summary>게시글 신청 현황</summary>
     <div markdown = "1">
    
![join](https://github.com/user-attachments/assets/0f0b91f2-300a-4864-9329-22611e48aaab)

![join2](https://github.com/user-attachments/assets/9daa26a0-cfc9-453f-b8c4-72a3cd241bdc)
    
    신청자는 신청취소를 할 수 있고,
    작성자는 유저의 프로필을 보고 신청자를 받아줄 지, 말지 선택할 수 있다.
![join3](https://github.com/user-attachments/assets/3c53f76c-6cdb-43fb-8057-f5c3031250b9)
   
    모집인원이 채워지면 자동으로 '모집완료'가 되고, 
    
    게시글이 설정한 시작 날에 자동으로 스터디 방이 생성된다.
 </details>
 
  <details>
     <summary>마이 페이지</summary>
     <div markdown = "1">
         
![mypage](https://github.com/user-attachments/assets/bca09e26-91e5-4c05-a49d-a9d9ef97fdab)
    
    목록을 누르면 자신의 스터디방이나 게시글 페이지로 이동
</div>
 </details>
  <details>
     <summary>알람</summary>
     <div markdown = "1">
    
![alarm](https://github.com/user-attachments/assets/8bd83ea9-9e19-460e-b368-587e67277178)
    
    헤더의 알람버튼을 누르면 자신이 지원한 스터디에 참가되었는지, 거절되었는지 알람 메세지가 뜬다.
   
    스터디 마감일, 시작일 등 메세지를 확인할 수 있다.
</div>
 </details>
 
## Trouble Shooting 

[로그인 토큰 (springboot)]
    
    CORS(Cross-Origin Resource Sharing) 오류가 나서 찾아보니, 프론트와 연결할 때 보안문제로 springboot에서 자체적으로 막아서 연결이 안됐었다.
    JWT토큰을 사용하여 토큰을 발급하기때문에 인가된 코드가 아니면 예외처리를하도록 문제를 해결했다.토큰 발급에 보안을 강화하기 위해 
    refreshtoken 개념을 추가해 토큰이 1일마다 새로 업데이트된다.(예시로 든 기간)
    
 ![jwt_refresh1](https://github.com/user-attachments/assets/947888e4-3a7d-4611-8f4b-a22a0bc12053)

   
[찜하기 DB ]
    
    찜하기 기능이 동작하려면 어떤 컬럼이 필요한지 DB 설정을 제대로 안하고 만들어서 
    true false 컬럼을 추가해 해결해줬다.
 
 ![like2](https://github.com/user-attachments/assets/872c42ef-1c22-465c-8044-3839a4cfa7a6)

[swith 모달창]
     
     공지글과 모먼트는 모달창으로 간단하게 글이나 사진을 남길 수 있는 공간이다.
     아무나 글을 삭제하면 안돼서 작성자만 삭제할 수 있도록 해야했다.
     비밀번호를 입력하는 방법과 내가 쓴 글에만 X 버튼이 뜨도록 하는 방법 두가지를 구현해봤다.
 
</p>
[채팅]
    
    실시간 채팅도 되면서 스터디방에 기록이 남는 채팅을 구현하고 싶었다.  
    db에 대화 내용들이 입력되기때문에 데이터 문제로 firebase를 이용해 채팅 기능을 구현하는 방법도 고려했었다. 
     스터디방은 종료시점으로부터 한달 뒤에 데이터가 사라지고 스터디원 끼리만 이뤄지는 채팅이므로 그냥 oracledb로 구현하기로 결정했다.
    로그인을 기준으로 내 채팅을 오른쪽에 배치, 타인의 채팅을 왼쪽에 배치하는 걸 리액트로 구현했다.
    채팅을 할때,실시간으로 접속한 사람들끼리 소통하면서 채팅을 보내면 db에 한번 저장이되고 채팅창에 내용이 보여지도록 구성했다.
    이후, 스터디방을 나갔다 들어와도 대화 내용들은 기록에 남아있다.
   
[회원 탈퇴와 관리자 페이지]
    
    사용자가 직접 게시글을 작성하고 스터디가 진행되는 구조라 바로 delete할 수 없었다.
    그래서 생각해낸 방법이 탈퇴한 사람은 더이상 로그인하지못하게 update를 하고,
    진행중인 스터디 방이 종료될때까지 (이름없음)으로 자료가 남겨져있다가 종료일 30일 이후 스터디방이 완전히 비활성화 되면
    관리자 권한으로 탈퇴 신청자의 데이터를 완전히 지울 수 있게 했다.
    
## 프로젝트를 통해 배운 점

- 사용자 관점에서 기능 구현을 해야한다.

      UI가 사용하기에 편하고 직관적이어야 사이트를 이용할 때 이탈률이 낮을것이다.
      같은 기능을 구현해도 여러가지 방식으로 구현할 수 있는데,
      예를들면 삭제할때 비밀번호를 입력하게 할지, 작성자에게만 삭제버튼이 뜨게할건지 설정할 수 있다는 점에서
      사용자 관점을 중심으로 생각해서 구현하고 개발해야된다고 느꼈다.
  
- 팀워크와 소통의 중요성

      팀원들끼리 잘 지내면서 소통도 많이하고 서로 공유하니까 프로젝트가 재밌었다.
      세미프로젝트에서 겪은 문제들을 보완하려고 진행상황 공유와 설계 중요성을 강조해 처음부터 모두 잡고 들어갔다. 
      조장으로서 모두의 의견을 들어보고 뭐가 가장 좋은 선택일지 방향을 같이 정하는 게 중요했다.  
      오류가 나거나 안되는 일이 있을때 물어보고 같이 문제해결을 한 것도 서로에게 많은 도움이 됐다.
 
- 생각하며 문제해결하기

      DB가 연결되어있기때문에  간단히 구현할 수 있을 것 같은 기능도 잘 생각해서 해야한다고 느꼈다.
      오류나 연관없는 데이터에 영향을 주지않으면서 간단하고 효율적인 방식을 찾아서 문제 해결을 해야한다.

- 마감일까지 스케줄을 맞추려면 어떻게 해야할까?

      계획을 세우고 진행상황을 공유하면서 프로젝트를 진행했다. 

![plan](https://github.com/user-attachments/assets/e5bce124-7af4-4c69-a572-e91df6523918)
    
       전체 진행 상황을 보기위한 차트,

![plann](https://github.com/user-attachments/assets/100b0d64-a8a7-4670-9cc4-0ebdd42195db)
    
    개인 진행 상황 차트를 모두가 볼 수 있게 해놨다.
    못해도 마감일 7~10일 전엔 완성을 해야 배포하고 오류를 잡을 수 있다는 걸 느꼈다.
     어려울거 같았던 것들이 예상보다 쉽게 해결되는 경우도 있었고 
     쉬울거라 생각했던 기능들이 오류때문에 시간을 잡아먹을때도 있었다. 
     물론 정해놓은 계획 기간내에 해결하기위해 밤도 새고 알아보는 과정은 재밌었다. 
     기간내에 구현하도록 노력하는 것은 당연하나 
     자신이 오류를 해결할때 얼마나 걸릴 지 예상하는 것과 
     기능구현을 기간내에 완성 할 수 있는지에 대해 아는 메타인지능력도 중요하다고 느꼈다.
     그래야 문제를 만났을때 나머지 스케줄을 융통성있게 조절할 수 있다고 생각한다.
