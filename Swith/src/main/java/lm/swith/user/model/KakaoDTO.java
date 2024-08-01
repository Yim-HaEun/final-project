package lm.swith.user.model;

import lm.swith.main.model.StudyPost;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class KakaoDTO {
	private String password;
	private String nickname;
	private String Kemail;
	
	
	public KakaoDTO(String password,String nickname, String Kemail) {
		this.password = password;
		this.Kemail = Kemail;
		this.nickname = nickname;
	}
}
