package studentblog.blog.controller;


import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import studentblog.blog.model.Blog;
import studentblog.blog.model.Users;
import studentblog.blog.service.UserService;

@Controller
@CrossOrigin
public class RegisterController {
	
	@Autowired
	private UserService service;
	
	
	@RequestMapping(value="/register", method=RequestMethod.POST)
	@ResponseBody
	public Users registerUser(@RequestBody Users user){
		service.saveUserToDb(user);
		user.setPassword(null);
		return user;
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	@ResponseBody
	public Users loginUser(@RequestBody Users user){
		Users userObj=service.findUser(user.getEmail());
		if(userObj.getPassword().equals(user.getPassword())) {
		userObj.setPassword(null);
		return userObj;
		}
		else 
			return null;
	}
	
	@RequestMapping(value="/post", method=RequestMethod.POST)
	@ResponseBody
	public Blog postBlog(@RequestBody Blog blog){
		service.post(blog);
		return blog;
		}
	
	
	@RequestMapping(value="/blogList", method=RequestMethod.GET)
	@ResponseBody
	public List<Blog> getBlog(){
		return service.getPosts();
		}
}
