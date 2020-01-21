package com.example.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.model.User;

@RestController
public class Login {

	@GetMapping(produces = "application/json")
	@RequestMapping({ "/validateLogin" })
	public User validateLogin() {
		return new User("User successfully authenticated");
	}
}