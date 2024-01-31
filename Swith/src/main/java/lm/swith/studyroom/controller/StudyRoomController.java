package lm.swith.studyroom.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")
public class StudyRoomController {
	private final StudyRoomService studyRoomService;

	// StudyRoomNotice
	@PostMapping("/create/StudyNoticeMoment/{post_no}") // INSERT
	public ResponseEntity<?> createStudyRoomNotice(@PathVariable Long post_no, @RequestBody StudyRoomNotice notice) {

		System.out.println("getPost_no : " + notice.getPost_no());
		System.out.println("getUser_no : " + notice.getUser_no());
		System.out.println("getNotice_title : " + notice.getNotice_title());
		System.out.println("getNotice_content : " + notice.getNotice_content());
		System.out.println("getNotice_password : " + notice.getNotice_password());
		studyRoomService.createStudyRoomNotice(notice);
		return ResponseEntity.ok(studyRoomService);
	}

	@GetMapping("/select/StudyNoticeMoment/{post_no}")
	public ResponseEntity<List<StudyRoomNotice>> findByStudyRoomNotice(@PathVariable Long post_no) {
		System.out.println(post_no);
		 List<StudyRoomNotice> notice = studyRoomService.findByStudyRoomNotice(post_no);
		 if (!notice.isEmpty()) {
		return ResponseEntity.ok(notice);
		 }else {
			 return ResponseEntity.noContent().build();
		 }
	}

	@PostMapping("/delete/StudyNoticeMoment/{post_no}")
	public ResponseEntity<?> deleteStudyRoomNotice(@PathVariable Long post_no, @RequestBody StudyRoomNotice notice) {
		
		 System.out.println("getPost_no : " + post_no);
		 System.out.println("getUser_no : " + notice.getUser_no());
		 
		 System.out.println("getNotice_title : " + notice.getNotice_title());
		 System.out.println("getNotice_content : " + notice.getNotice_content());
		 System.out.println("getNotice_post_date : " + notice.getNotice_post_date());
		 System.out.println("getNotice_password : " + notice.getNotice_password());
		 System.out.println("Notice_no : " + notice.getNotice_no());
		
		studyRoomService.deleteStudyRoomNotice(notice.getNotice_no(), notice.getNotice_password());
		return ResponseEntity.ok("실행완");
	}

	// Study Moment
	@PostMapping("/create/StudyMoment/{post_no}") // INSERT
	public ResponseEntity<?> createStudyMoment(@PathVariable Long post_no, @RequestBody StudyMoment studyMoment) {
		studyRoomService.createStudyMoment(studyMoment);
		return ResponseEntity.ok("Success");
	}

}