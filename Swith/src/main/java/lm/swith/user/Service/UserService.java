package lm.swith.user.Service;

import java.sql.Blob;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import lm.swith.user.mapper.UsersMapper;
import lm.swith.user.model.SwithUser;

@Service
public class UserService {
	@Autowired
	private UsersMapper usersMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder; //encoding password
    

	public SwithUser signUpUser(SwithUser swithUser) { //save the register user  
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
	//login
	public SwithUser login(String userID, String password) {
		return usersMapper.loginUser(userID, password);
	}
	//find role
	public SwithUser findUserRole(String role) {
		return usersMapper.findUserRole(role);
	}

	

}
