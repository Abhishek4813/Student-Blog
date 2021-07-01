package studentblog.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import studentblog.blog.Repository.BlogRepository;
import studentblog.blog.Repository.UserRepository;
import studentblog.blog.model.Blog;
import studentblog.blog.model.Users;

@Repository
public class UserService {
	
	@Autowired
	private UserRepository userRep;
	
	@Autowired
	private BlogRepository blogRep;
	
	public void saveUserToDb(Users user) {
		userRep.save(user);
	}
	
	public Users findUser(String email) {
		return userRep.findById(email).get();
	}
	
	public void post(Blog blog) {
		blogRep.save(blog);
	}
	
	public List<Blog> getPosts(){
		List<Blog> list= new ArrayList<>();
		blogRep.findAll().forEach(list::add);
		return list;
	}

	
}
