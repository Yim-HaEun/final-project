package lm.swith.main.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import lm.swith.main.model.Cafes;
import lm.swith.main.model.PostTechStacks;
import lm.swith.main.model.Skill;
import lm.swith.main.model.StudyApplication;
import lm.swith.main.model.StudyPost;


@Mapper
public interface StudyPostMapper {
	
	// 스터디 목록
	List<StudyPost> getAllStudyPostWithSkills();
	
	// 스터디 등록
	//void insertStudyPost (StudyPost studyPost);
	// 스터디 승인된사람들 목록
	List<StudyApplication> getAllApplicantsByPostNoStudyRoom(Long post_no);
	// 스터디 삭제
	void deleteStudyPost (Long post_no);
	
	// 스터디 상세 페이지
	StudyPost getStudyPostByPostNo(@Param("post_no") Long post_no);
	
	// 스터디 수정
	void updateStudyPost (StudyPost studyPost);
	
	// 스터디 조건 검색
	List<StudyPost> getStudiesBySelect(String recruit_type, String study_method, String study_location, Long skill_no);
		
	// 스터디 제목+내용 검색
	List<StudyPost> getStudiesBySearch(String study_title, String study_content);
	
	// 카페 목록
	List<Cafes> getAllCafes(String bplcnm, String sitewhladdr, String x, String y);
		
	
	//카페 검색
	List<Cafes> searchCafes(String keyword);
	
	
	// test
    void insertStudyPosts(StudyPost studyPost);
    void insertPostTechStacks(PostTechStacks postTechStacks);
    
    void insertSkill(List<Skill> skill);
    void insertStudyApplication(StudyApplication studyApplication);
    
    // 내가 참여한 스터디 목록 OK
	List<StudyPost> getAllStudiesWithUserNo(Long user_no);
	
	
}