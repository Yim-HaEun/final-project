package lm.swith.user.Service;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletResponse;
import lm.swith.user.mapper.UsersMapper;
import lm.swith.user.model.KakaoDTO;
import lm.swith.user.model.SwithUser;




	@Service
	public class KakaoService {
	    @Autowired
	    private UsersMapper usersMapper;
	    private final PasswordEncoder passwordEncoder;
	    // Value를 썼기 때문에 각 값을 변수에 넣어 보관하겠다는 의미
	    @Value("${kakao.client.id}") // Spring으로 import
	    private String KAKAO_CLIENT_ID;
	
	    @Value("${kakao.client.secret}")
	    private String KAKAO_CLIENT_SECRET;	
	    @Value("${kakao.redirect.url}")
	    private String KAKAO_REDIRECT_URL;
	
	    // 카카오 자체에서 인증으로 들어가는 공식 주소
	    private final static String KAKAO_AUTH_URI ="https://kauth.kakao.com";
	    private final static String KAKAO_API_URI="https://kapi.kakao.com";
	    
	    private final UsersMapper usersmapper;
	    
	    public KakaoService(UsersMapper usersmapper, PasswordEncoder passwordEncoder) {
	        this.usersmapper = usersmapper;
	        this.passwordEncoder = passwordEncoder;
	    }

			
				/*
				public KakaoDTO kakaoLogin(String code, HttpServletResponse response) throws JsonProcessingException{
					String accessToken = getAccessToken(code);
					KakaoDTO kakaoDTO = getKakaoUserInfo(accessToken);
					User kakaoUser = registerKakaoUserIfNeed(kakaoDTO);
					Authentication authentication = forceLogin(kakaoUser);
					kakaoUsersAuthorizationInput(authentication, response);
					return kakaoDTO;
				}
				
				// 1. "인가 코드"로 "액세스 토큰" 요청
			    private String getAccessToken(String code) throws JsonProcessingException {
			        // HTTP Header 생성
			        HttpHeaders headers = new HttpHeaders();
			        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

			        // HTTP Body 생성
			        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
			        body.add("grant_type", "authorization_code");
			        body.add("client_id", "1d11454b9e54fe7498a59635e8d3f681");
			        body.add("redirect_uri", "http://localhost:3000/kakao/oauth");
			        body.add("code", code);
			        // HTTP 요청 보내기
			        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
			        RestTemplate rt = new RestTemplate();
			        ResponseEntity<String> response = rt.exchange(
			                "https://kauth.kakao.com/oauth/token",
			                HttpMethod.POST,
			                kakaoTokenRequest,
			                String.class
			        );
			     // HTTP 응답 (JSON) -> 액세스 토큰 파싱
			        String responseBody = response.getBody();
			        ObjectMapper objectMapper = new ObjectMapper();
			        JsonNode jsonNode = objectMapper.readTree(responseBody);
			        return jsonNode.get("access_token").asText();
			    }
			 // 2. 토큰으로 카카오 API 호출
			    private KakaoDTO getKakaoUserInfo(String accessToken) throws JsonProcessingException {
			        // HTTP Header 생성
			        HttpHeaders headers = new HttpHeaders();
			        headers.add("Authorization", "Bearer " + accessToken);
			        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

			        // HTTP 요청 보내기
			        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
			        RestTemplate rt = new RestTemplate();
			        ResponseEntity<String> response = rt.exchange(
			                "https://kapi.kakao.com/v2/user/me",
			                HttpMethod.POST,
			                kakaoUserInfoRequest,
			                String.class
			        );
			        // responseBody에 있는 정보를 꺼냄
			        String responseBody = response.getBody();
			        ObjectMapper objectMapper = new ObjectMapper();
			        JsonNode jsonNode = objectMapper.readTree(responseBody);

			       
			        String email = jsonNode.get("kakao_account").get("email").asText();
			        String nickname = jsonNode.get("properties")
			                .get("nickname").asText();

			        return new KakaoDTO(email, nickname);
			    }
			
			    */

				//code를 받아 accessToken발급
				public String getKakaoLogin() {
					return KAKAO_AUTH_URI + "/oauth/authorize?client_id=" + KAKAO_CLIENT_ID + "&redirect_uri=" + KAKAO_REDIRECT_URL + "&response_type=code"; // 카카오 개발자 공식문서에 적혀있는 주소임
				}
				
				public String kakaoLogin(String code) throws Exception {
				    System.out.println("service code : " + code);    
					if(code == null) throw new Exception("존재하는 인증코드가 없습니다.");
					System.out.println("service code ____ : " + code);   
					// 로그인이 허용된 토큰이 들어갈 공간
					String accessToken="";

					try {
						HttpHeaders headers = new HttpHeaders(); // Spring으로 import
						headers.add("Content-type", "application/x-www-form-urlencoded");
						MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
						params.add("grant_type", "authorization_code");
						params.add("client_id", KAKAO_CLIENT_ID);
						params.add("client_secret", KAKAO_CLIENT_SECRET);
						params.add("code", code);
						params.add("redirect_uri", KAKAO_REDIRECT_URL);
						

						RestTemplate restTemplate = new RestTemplate();
						
			            HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, headers);
			            System.out.println("여기까지는 잘됨");
						ResponseEntity<String> response = restTemplate.exchange(KAKAO_AUTH_URI + "/oauth/token", HttpMethod.POST, httpEntity, String.class);
						
						System.out.println("ResponseEntity 여기서 막힘");
						JSONParser jsonParser = new JSONParser();
						JSONObject jsonObject = (JSONObject) jsonParser.parse(response.getBody());
						System.out.println("jsonObject" + jsonObject);
						accessToken = (String) jsonObject.get("access_token");
						System.out.println("accessToken" + accessToken);

					} catch(Exception e) {
						throw new Exception("api를 불러오지 못했습니다.");
					}
					
					return getAccessToken(accessToken);
				}
				
				private String getAccessToken(String accessToken) {
					// TODO Auto-generated method stub
					return accessToken;
				}


				// 회사에서 카카오로부터 로그인 할 수 있도록 허용받은 받은 로그인 허용 토큰을 사용하여 카카오 API에서 사용자 정보를 가져오는 메서드 (개인 사용자가 아님)
				private KakaoDTO getUserInfoWithToken(String accessToken, String Kemail, String password, String nickname) throws Exception {
					// 토큰용 HTTPHeader 생성
					HttpHeaders headers = new HttpHeaders();
					// Bearer : Http 요청에서 인증할 때 특정 형태로 변환하여 토큰 타입을 나타내는 것
					headers.add("Authorization", "Bearer " + accessToken);
					headers.add("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
					
					// 내용을 담아놓을 template 생성
					RestTemplate rt = new RestTemplate();
					HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(headers);
					
					ResponseEntity<String> response = rt.exchange(KAKAO_API_URI + "/v2/user/me", HttpMethod.POST, httpEntity, String.class);

					// Response 데이터 가져오기
					JSONParser jsonParser = new JSONParser();
					JSONObject jsonObject =(JSONObject) jsonParser.parse(response.getBody());
					JSONObject account = (JSONObject) jsonObject.get("kakao_account");
					
					
					long user_no = (long) jsonObject.get("user_no");
					String email = String.valueOf(account.get("email"));
					
				    System.out.println("email : " + email);
			
				
				return KakaoDTO.builder()
		                .Kemail(email)
		                .password(password)
		                .nickname(nickname)
		                .build();
		    }
				 
				// 데이터베이스에 저장하는 메서드 생성


				
				  
				
			
		}

	
	
	
	/*
    @Value("${kakao.client.id}")
    private String KAKAO_CLIENT_ID;

    @Value("${kakao.client.secret}")
    private String KAKAO_CLIENT_SECRET;

    @Value("${kakao.redirect.url}")
    private String KAKAO_REDIRECT_URL;

    private final static String KAKAO_AUTH_URI = "https://kauth.kakao.com";

    private final static String KAKAO_API_URI = "https://kapi.kakao.com";

    

    public String getKakaoLogin() {
        return KAKAO_AUTH_URI + "/oauth/authorize"
                + "?client_id=" + KAKAO_CLIENT_ID
                + "&redirect_uri=" + KAKAO_REDIRECT_URL
                + "&response_type=code";
    }

    public SwithUser getKakaoInfo(String code, String password, String userName, String userProfile, String userAddress, String userIntroduction, String role) throws Exception {
        if (code == null) throw new Exception("API를 불러오지 못했습니다.");

        String accessToken = "";
        String refreshToken="";
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type", "application/x-www-form-urlencoded");

            MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
            params.add("grant_type", "authorization_code");
            params.add("client_id", KAKAO_CLIENT_ID);
            params.add("client_secret", KAKAO_CLIENT_SECRET);
            params.add("code", code);
            params.add("redirect_uri", KAKAO_REDIRECT_URL);

            RestTemplate restTemplate = new RestTemplate();
            HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, headers);

            ResponseEntity<String> response = restTemplate.exchange(
                    KAKAO_AUTH_URI + "/oauth/token",
                    HttpMethod.POST,
                    httpEntity,
                    String.class
            );
            System.out.println("Kakao API Token Response: " + response.getBody());
            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObj = (JSONObject) jsonParser.parse(response.getBody());

            accessToken = (String) jsonObj.get("access_token");
            refreshToken = (String) jsonObj.get("refresh_token");

        } catch (Exception e) {
        	 throw new Exception("카카오 API 호출 실패: " + e.getMessage());
            
        }

        return getUserInfoWithToken(accessToken,password, userName,userProfile,userAddress, userIntroduction,role);
    }

    private SwithUser getUserInfoWithToken(String accessToken, String password, String userName, String userProfile, String userAddress, String userIntroduction, String role) throws Exception {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");

        RestTemplate rt = new RestTemplate();
        HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = rt.exchange(
                KAKAO_API_URI + "/v2/user/me",
                HttpMethod.POST,
                httpEntity,
                String.class
        );

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObj = (JSONObject) jsonParser.parse(response.getBody());
        JSONObject account = (JSONObject) jsonObj.get("kakao_account");
        JSONObject profile = (JSONObject) account.get("profile");

        Object userNOObject = jsonObj.get("userNO");
        long userNO = userNOObject != null ? ((Number) userNOObject).longValue() : 0;
        String email = String.valueOf(account.get("email"));
        String nickname = String.valueOf(profile.get("nickname"));

   
        
        
        
        
        
        return SwithUser.builder()
                .userNO(userNO)
                .email(email)
                .password(password)
                .userName(userName)
                .nickname(nickname)
                .userProfile(userProfile)
                .userAddress(userAddress) 
                .userIntroduction(userIntroduction)
                .role(role)
                .build();
    }

    public SwithUser signUpUser(SwithUser swithUser)  {
    	SwithUser user = new SwithUser();
    	user.setEmail(swithUser.getEmail());
		user.setPassword(swithUser.getPassword());
		user.setUserName(swithUser.getUserName());
		user.setNickname(swithUser.getNickname());
		user.setUserProfile(swithUser.getUserProfile());
		user.setUserAddress(swithUser.getUserAddress());
		user.setUserIntroduction(swithUser.getUserIntroduction());
		user.setRole(swithUser.getRole());
		
		usersMapper.insertUser(swithUser);
		return user;
		
    }
    
    
}
*/