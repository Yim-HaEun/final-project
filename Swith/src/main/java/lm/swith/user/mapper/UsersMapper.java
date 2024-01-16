package lm.swith.user.mapper;

import org.apache.ibatis.annotations.Mapper;

import lm.swith.user.model.SwithUser;

@Mapper
public interface UsersMapper {
	SwithUser insertUser(SwithUser swithUser);
	
	SwithUser loginUser(String userID, String password);
	
	SwithUser findUserRole(String role);



}
