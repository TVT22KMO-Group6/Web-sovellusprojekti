package com.group6.sovellusprojekti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.domain.Sort.Order;

import com.group6.sovellusprojekti.model.TEmission;
import com.group6.sovellusprojekti.model.TEmissionRepository;


@Service
public class Visual4Service {
    @Autowired
    private TEmissionRepository TEmissionRepository;

   /*   private Sort sortByYear() {
        return Sort.by(Order.asc("year"));
    }
    */

    public List<TEmission> getAllTEmissions() {
        return TEmissionRepository.findAll();
    }
    public List<TEmission> getAllTEmissionsByCountry(String country) {
        return TEmissionRepository.findByCountry(country);
    }
    public List<TEmission> getAllTEmissionsByYear(int year) {
        return TEmissionRepository.findByYear(year); 
    }
   

}
