package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.TicketDao;
import com.example.demo.model.Ticket;

@RestController
@RequestMapping("/ticket")
public class TicketController {
	@Autowired
	private TicketDao dao;

	@PostMapping("/bookTickets")
	public String bookTicket(@RequestBody List<Ticket> tickets) {
		dao.saveAll(tickets);
		return "ticket booked : " + tickets.size();
	}
	
	@PostMapping("/bookTicket")
	public String bookTicket(@RequestBody Ticket tickets) {
		dao.save(tickets);
		return "ticket booked";
	}

	@GetMapping("/getTickets")
	public List<Ticket> getTickets() {
		return (List<Ticket>) dao.findAll();
	}
	
	@GetMapping("/getTicket/{id}")
	public Optional<Ticket> getTicket(@PathVariable(name = "id") int id) {
		return  dao.findById(id);
	}
	
	@PutMapping("/updateTicket")
	public String updateTicket(@RequestBody Ticket tickets) {
		dao.save(tickets);
		return "ticket updated successfully";
	}
	
	@DeleteMapping("/deleteTicket/{id}")
	public String deleteTicket(@PathVariable(name = "id") int id) {
		dao.deleteById(id);
		return "ticket deleted";
	}

}