package com.example.controller;

import com.example.model.City;
import com.example.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RestController
public class Cities {

    @Autowired
    private CityRepository cityRepository;

    @RequestMapping(value = "/cities", method = RequestMethod.GET, produces = "application/json")
    public List<City> cities() {
        return cityRepository.findAll();
    }
}