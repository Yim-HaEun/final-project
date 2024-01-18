package lm.swith.user.controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lm.swith.user.Service.KakaoService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
public class LoginController {
//	private final KakaoService kakaoService;

	
	@GetMapping("/login")
	public String LoginForm(@RequestBody Model model) {
		//model.addAttribute("kakaoUrl",kakaoService.getKakaoLogin());
		return "login";
	}
	@GetMapping("/home")
	public String home() {
		return "/"; //로그인 후 메인페이지로 이동 
	}
	
	

}
