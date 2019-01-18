package com.user.userreg.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.user.userreg.dao.UserRepository;
import com.user.userreg.models.User;

@RestController
@RequestMapping("/userreg")
public class UserController {
	
	@Autowired
	UserRepository userRepo;
	
	//instead of below we can also use Request.Method=GET
	@GetMapping
	public List<User> listUsers()
	{
		return userRepo.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void saveUsers(@RequestBody User user)
	{
		userRepo.save(user);
	}
	
}
