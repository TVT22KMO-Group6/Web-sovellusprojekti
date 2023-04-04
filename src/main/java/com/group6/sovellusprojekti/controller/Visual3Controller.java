package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.Temperature_evolution;
import com.group6.sovellusprojekti.service.Visual3Service;

@RestController
public class Visual3Controller {
    @Autowired
    private Visual3Service Visual3Service;

    @GetMapping("visual3")
    public List<Temperature_evolution> getData() {
        return Visual3Service.findAll();
    }
}
