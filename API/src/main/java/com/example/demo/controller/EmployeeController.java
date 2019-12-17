package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.model.Employee;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeDao dao;
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addEmployee")
	public String addEmployee(@RequestBody Employee emp) {
		dao.save(emp);
		return "Employee added successfully.";
	}

	//@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getEmployees")
	public List<Employee> getEmployees() {
		return (List<Employee>) dao.findAll();
	}
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getEmployee/{id}")
	public Optional<Employee> getTicket(@PathVariable(name = "id") int id) {
		return  dao.findById(id);
	}
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/updateEmployee")
	public String updateEmployee(@RequestBody Employee emp) {
		dao.save(emp);
		return "Employee updated successfully";
	}
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable(name = "id") int id) {
		dao.deleteById(id);
		return "Employee deleted successfully.";
	}

}