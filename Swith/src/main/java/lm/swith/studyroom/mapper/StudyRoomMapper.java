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
	List<StudyRoomNotice> findByStudyRoomNotice(Long post_no);
	
	//DELETE
	void deleteStudyRoomNotice(Long notice_no, String notice_password);
	
	
// StudyMoment Mapper
	// INSERT
	void createStudyMoment(StudyMoment studyMoment);
	
	// SELECT
	StudyMoment findByStudyMoment(StudyMoment studyMoment);
	
	//DELETE
	void deleteStudyMoment(StudyMoment studyMoment);
}
	
	
	
