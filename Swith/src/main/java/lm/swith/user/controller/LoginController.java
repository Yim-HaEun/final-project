package lm.swith.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lm.swith.user.Service.KakaoService;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class LoginController {

	
	//git
	private final KakaoService kakaoService;
	
	@GetMapping("/login")
	public String LoginForm(Model model) {
		model.addAttribute("kakaoUrl",kakaoService.getKakaoLogin());
		//model.addAttribute("");//git
		return "login";
	}
	@GetMapping("/home")
	public String home() {
		return "home";
	}
}
