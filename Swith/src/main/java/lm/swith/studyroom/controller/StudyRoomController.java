package lm.swith.studyroom.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lm.swith.studyroom.model.StudyMoment;
import lm.swith.studyroom.model.StudyRoomNotice;
import lm.swith.studyroom.service.StudyRoomService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/studyRoom")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true", allowedHeaders="*")
public class StudyRoomController {
	private final StudyRoomService studyRoomService;

	// StudyRoomNotice
	@PostMapping("/create/StudyNoticeMoment/{post_no}") // INSERT
	public ResponseEntity<?> createStudyRoomNotice(@PathVariable Long post_no, @RequestBody StudyRoomNotice notice){
		
		
		System.out.println("getPost_no : " +  notice.getPost_no());
		System.out.println("getUser_no : " + notice.getUser_no());
		System.out.println("getNotice_title : " + notice.getNotice_title());
		System.out.println("getNotice_content : " + notice.getNotice_content());
		System.out.println("getNotice_password : " + notice.getNotice_password());
		studyRoomService.createStudyRoomNotice(notice);
		return ResponseEntity.ok(studyRoomService);
	}
	
	// Study Moment
	@PostMapping("/create/StudyMoment/{post_no}") // INSERT
	public ResponseEntity<?> createStudyMoment(@PathVariable Long post_no,@RequestBody StudyMoment studyMoment){
		studyRoomService.createStudyMoment(studyMoment);
		return ResponseEntity.ok("Success");
	}

	
	
}