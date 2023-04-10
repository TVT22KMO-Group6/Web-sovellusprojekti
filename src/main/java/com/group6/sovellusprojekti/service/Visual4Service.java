package com.group6.sovellusprojekti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;

import com.group6.sovellusprojekti.model.TEmission;
import com.group6.sovellusprojekti.model.TEmissionRepository;


@Service
public class Visual4Service {
    @Autowired
    
    private Sort sortByYear() {
        return Sort.by(Order.asc("year"));
    }

    private TEmissionRepository TEmissionRepository;

    public List<TEmission> getAllTEmissions() {
        return TEmissionRepository.findByEmission("emission");
    }
    public List<TEmission> getAllTEmissionsByCountry() {
        return TEmissionRepository.findByCountry("country");
    }
   

}
