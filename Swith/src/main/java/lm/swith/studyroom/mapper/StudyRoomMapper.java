package lm.swith.studyroom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import lm.swith.studyroom.model.StudyMoment;
import lm.swith.studyroom.model.StudyRoomNotice;

@Mapper
public interface StudyRoomMapper {
//  StudyRoomNotice Mapper 
	// INSERT
	void createStudyRoomNotice(StudyRoomNotice studyRoomNotice);
	
	// SELECT
	List<StudyRoomNotice> findByStudyNoticeWithNickname(Long post_no);
	
	//DELETE
	void deleteStudyRoomNotice(Long notice_no, String notice_password);
	
	
// StudyMoment Mapper
	// INSERT
	void createStudyMoment(StudyMoment studyMoment);
	
	// SELECT
	List<StudyMoment> findByStudyMoment(Long post_no); //생각해보기
	
	//DELETE
	void deleteStudyMoment(Long moment_no, Long user_no);//생각해보기
}
	
	
	
