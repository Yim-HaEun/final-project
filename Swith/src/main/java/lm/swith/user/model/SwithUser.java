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
@AllArgsConstructor
@NoArgsConstructor
public class SwithUser {
	private Long userNO; //sequence
	private String email; //email
	private String password;//pw
	private String userName;//real name
	private String nickname;//nickname
	private String userProfile; //profile img
	private String userAddress;//address
	private String userIntroduction;//introduction
	private String role;// authorization(user / admin) kakao,github
}
