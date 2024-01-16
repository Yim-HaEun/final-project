package lm.swith.user.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpServletRequest;
import lm.swith.user.Service.KakaoService;
import lm.swith.user.Service.UserService;
import lm.swith.user.common.MsgEntity;
import lm.swith.user.model.SwithUser;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/users")
@RequiredArgsConstructor
public class RegisterController {
	
	private final KakaoService kakaoService;
	
	private final UserService userService;
	
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
	
	@GetMapping("/register")
	public String showRegisterForm(Model model) {
		model.addAttribute("users", new SwithUser());
		return "register";
	}
	@PostMapping("/register")
	public String registerUser(SwithUser swithUser) {
		userService.signUpUser(swithUser);
			return "redirect:/";
	}
	@GetMapping("/kakao/callback")
    public String callback(HttpServletRequest request,
                           @RequestParam(required = false) String password,
                           @RequestParam(required = false) String userName, 
                           @RequestParam(required = false) String userProfile,
                           @RequestParam(required = false) String userAddress,
                           @RequestParam(required = false) String userIntroduction,
                           @RequestParam(required = false) String role,
                           Model model) throws Exception {

        SwithUser kakaoInfo = kakaoService.getKakaoInfo(request.getParameter("code"), password,userName, userProfile,userAddress,userIntroduction,role );
        model.addAttribute("kakaoInfo", kakaoInfo);
        return "kakaoRegister";
    }

    @PostMapping("/kakaoregister")
    public ResponseEntity<MsgEntity> registerUser(@RequestParam String email,
									    		  @RequestParam String password,
										          @RequestParam String userName,
										          @RequestParam String nickname,
										          @RequestParam String userProfile,
										          @RequestParam String userAddress, 
												  @RequestParam String userIntroduction, 
												  @RequestParam String role) {
        SwithUser swithUser = SwithUser.builder()
        		.email(email)
        		.password(password)
                .userName(userName)
                .nickname(nickname)
                .userProfile(userProfile)
                .userAddress(userAddress)
                .userIntroduction(userIntroduction)
                .role(role)
                .build();

        SwithUser registeredUser = userService.signUpUser(swithUser);

        return ResponseEntity.ok()
                .body(new MsgEntity("Success", registeredUser));
    }



}
