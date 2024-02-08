package lm.swith.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lm.swith.main.mapper.StudyPostMapper;
import lm.swith.main.model.Cafes;
import lm.swith.main.model.PostTechStacks;
import lm.swith.main.model.StudyApplication;
import lm.swith.main.model.StudyPost;

@Service
public class StudyPostService {
	@Autowired
	private final StudyPostMapper studyPostMapper;
	

    public StudyPostService(StudyPostMapper studyPostMapper) {
        this.studyPostMapper = studyPostMapper;
    }
	// Main Part
    
    // 스터디 등록하기
	/*
	 * public void insertStudyPost (StudyPost studyPost) {
	 * studyPostMapper.insertStudyPost(studyPost); }
	 */
	
	// 스터디 목록 불러오기	
    public List<StudyPost> getAllStudyPostWithSkills() {
        return studyPostMapper.getAllStudyPostWithSkills();
    }
    
    // 스터디 조건 검색
    public List<StudyPost> getStudiesBySelect(String recruit_type, String study_method, String study_location, Long skill_no) {
        return studyPostMapper.getStudiesBySelect(recruit_type, study_method, study_location, skill_no);
    }
    
    // 스터디 키워드 검색
    public List<StudyPost> getStudiesByKeyword(String study_title, String study_content) {
        return studyPostMapper.getStudiesBySearch(study_title, study_content);
    }
	
    
    
    // Detail Part
	// 스터디 상세 페이지 불러오기
    public StudyPost getStudyPostByPostNo(Long post_no) {
        return studyPostMapper.getStudyPostByPostNo(post_no);
    }
    
    // 스터디 수정
    public void updateStudyPost(StudyPost studyPost) {
    	studyPostMapper.updateStudyPost(studyPost);
    }
    
    // 스터디 삭제
    public void deleteStudyPost(Long post_no) {
    	studyPostMapper.deleteStudyPost(post_no);
    }
    
    // 카페 목록 불러오기	
    public List<Cafes> getAllCafes(String bplcnm, String sitewhladdr, String x, String y) {
        return studyPostMapper.getAllCafes(bplcnm, sitewhladdr, x, y);
    }
    
    //카페 검색
    public List<Cafes> searchCafes(String keyword) {
        return studyPostMapper.searchCafes(keyword);
    }
    
    @Transactional
    public void insertTestStudyPost(StudyPost studyPost) {
        try {
            // StudyPost 삽입
            studyPostMapper.insertStudyPosts(studyPost);

            // PostTechStacks 삽입
            System.out.println("Original skill_no list: " + studyPost.getSkill_no());
            List<Long> postTechStacksList = studyPost.getSkill_no();
            System.out.println("postTechStacksList size: " + postTechStacksList.size());
            for (Long skill_no : postTechStacksList) {
                System.out.println("Current skill_no: " + skill_no);
                PostTechStacks postTechStacks = new PostTechStacks();
                postTechStacks.setPost_no(studyPost.getPost_no());
                postTechStacks.setSkill_no(skill_no);
                System.out.println("PostTechStacks skill_no: " + postTechStacks.getSkill_no());
                // PostTechStacks를 삽입
                studyPostMapper.insertPostTechStacks(postTechStacks);
            }

            // StudyApplication 삽입
            StudyApplication studyApplication = new StudyApplication();
            studyApplication.setPost_no(studyPost.getPost_no());
            studyApplication.setUser_no(studyPost.getUser_no());
            studyPostMapper.insertStudyApplication(studyApplication);
        } catch (Exception e) {
            // 롤백 여부 확인을 위해 예외 발생
            throw new RuntimeException("Transaction rolled back", e);
        }
    }
    //스터디룸 방 이름 
	public StudyPost getStudyRoomTitle(Long post_no) {
		
		return studyPostMapper.getStudyRoomTitle(post_no);
	}
    
    
    
}