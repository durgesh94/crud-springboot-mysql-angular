package com.example.demo.controller;

import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ManagerDao;
import com.example.demo.model.Manager;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/manager")
public class ManagerController {
	@Autowired
	private ManagerDao dao;
	
	@PostMapping("/register")
	public Boolean registerManager(@RequestBody Manager manager) {
		List<Manager> mList = (List<Manager>) dao.findAll();
		Iterator<Manager> iterator = mList.iterator();
	    while (iterator.hasNext()) {
	        Manager m = iterator.next();
	        if (m.getEmail().equalsIgnoreCase(manager.getEmail())) {
	            return false;
	        }
	    }
		dao.save(manager);
		return true;
	}
	
	@GetMapping("/login/{email}/{password}")
	public Boolean login(@PathVariable(name = "email") String email,@PathVariable(name = "password") String password) {
		List<Manager> mList = (List<Manager>) dao.findAll();
		Iterator<Manager> iterator = mList.iterator();
	    while (iterator.hasNext()) {
	        Manager m = iterator.next();
	        if (m.getEmail().equalsIgnoreCase(email) && m.getPassword().equalsIgnoreCase(password)) {
	            return true;
	        }
	    }
		return false;
	}

}