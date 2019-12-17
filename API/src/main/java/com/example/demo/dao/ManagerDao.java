package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Manager;

public interface ManagerDao extends CrudRepository<Manager, Integer>{

}