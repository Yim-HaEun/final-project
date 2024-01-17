package lm.swith.user.model;
import java.sql.Blob;

/*
 USER_NO -> userNO
 USER_ID ->userID
 USER_PASSWORD ->password
 USER_NAME ->userName
 USER_NICKNAME->userNickname
 USER_PROFILE->userProfile
 USER_ADDRESS ->userAddress
 USER_INTRODUCTION
 USER_ROLE ->role
 * */
import lombok.*;

@Builder
@Getter
@Setter
public class SwithUser {
	private Long id; //sequence
	private String email; //email
	private String password;//pw
	private String userName;//real name
	private String nickname;//nickname
	private String userProfile; //profile img
	private String userAddress;//address
	private String userIntroduction;//introduction
	private String role;// authorization(user / admin) kakao,github
	
	public SwithUser() {};
	
	public SwithUser(long id, String email, String password, String userName, String nickname,
            String userProfile, String userAddress, String userIntroduction, String role) {
this.id = id;
this.email = email;
this.password = password;
this.userName = userName;
this.nickname = nickname;
this.userProfile = userProfile;
this.userAddress = userAddress;
this.userIntroduction = userIntroduction;
this.role = role;
}
}
