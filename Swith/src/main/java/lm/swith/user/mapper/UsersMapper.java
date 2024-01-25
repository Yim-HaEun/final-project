package lm.swith.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import lm.swith.user.model.SwithUser;

@Mapper
public interface UsersMapper {
	void insertUser(SwithUser swithUser);
	
	
	SwithUser findUserRole(String role);
	
	
	List<SwithUser> findUsersAll();
	
	SwithUser findByEmail(String email);

	SwithUser findByEmailAndPassword(String email, String password);
	
	void updateIntroduction(@Param("user_no") Long user_no, @Param("newIntroduction") String newIntroduction);
	
}
