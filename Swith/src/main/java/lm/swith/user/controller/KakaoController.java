/*package lm.swith.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lm.swith.user.Service.KakaoService;
import lm.swith.user.Service.UserService;
import lm.swith.user.common.MsgEntity;
import lm.swith.user.model.KakaoDTO;
import lm.swith.user.model.SwithUser;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/kakao")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000",allowCredentials = "true")
public class KakaoController {
	private final KakaoService kakaoService;
	private final UserService userService;
    
	//카카오
	
	@GetMapping("/oauth/info")
    public String callback(HttpServletRequest request,
    	      				@RequestParam(required = false) String Kemail,
                           @RequestParam(required = false) String password,
                           @RequestParam(required = false) String nickname, 
                           Model model) throws Exception {

        KakaoDTO kakaoInfo = kakaoService.getKakaoInfo(request.getParameter("code"),Kemail, password,nickname);
   
        model.addAttribute("kakaoInfo", kakaoInfo);
        return "kakaoRegister";
    }
	
	@GetMapping("/oauth") // 인가코드 받는 곳
	public String kakaoLogin(@RequestParam String code ) throws Exception {
	    System.out.println(code);
	    return kakaoService.kakaoLogin(code);
	}
	
	/*@GetMapping("/oauth")
	public ResponseEntity<?> registerKakaoUser(
	        @RequestParam String code, @RequestParam String Kemail,
	        @RequestParam String password, @RequestParam String nickname) {
	    
	    KakaoDTO registerKakao = null;
	    try {
	        registerKakao = kakaoService.getKakaoInfo(code, Kemail, password, nickname);
	        System.out.println(registerKakao.getKemail());
	        System.out.println(registerKakao.getNickname());
	    } catch (Exception e) {
	        e.printStackTrace();
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body(new MsgEntity("Error", null));
	    }
	    
	    return ResponseEntity.ok()
	            .body(registerKakao);
	}
	*/
        /* String redirectUrl = request.getContextPath() + "/";
        MsgEntity responseMsg = new MsgEntity("Success", registeredUser, redirectUrl);

        return ResponseEntity.ok()
                .body(responseMsg);
               

}
*/
