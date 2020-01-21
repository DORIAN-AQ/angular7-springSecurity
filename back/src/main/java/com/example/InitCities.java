package com.example;

import com.example.model.City;
import com.example.repository.CityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitCities implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(InitCities.class);

    @Autowired
    private CityRepository cityRepository;

    @Override
    public void run(String... args) throws Exception {

        logger.info("Saving cities");

        cityRepository.save(new City("Bratislava", 432000));
        cityRepository.save(new City("Budapest", 1759000));
        cityRepository.save(new City("Prague", 1280000));
        cityRepository.save(new City("Warsaw", 1748000));
        cityRepository.save(new City("Los Angeles", 3971000));
        cityRepository.save(new City("New York", 8550000));
        cityRepository.save(new City("Edinburgh", 464000));
    }
}