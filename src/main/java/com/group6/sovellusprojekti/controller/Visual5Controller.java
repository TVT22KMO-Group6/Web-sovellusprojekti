package com.group6.sovellusprojekti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.EmissionSector;
import com.group6.sovellusprojekti.model.EmissionSubSector;
import com.group6.sovellusprojekti.service.Visual5Service;

@RestController
@RequestMapping("/api/visual5/emission-sectors")
class EmissionSectorController {

    @Autowired
    private Visual5Service service;

    /**
     * Get all emission sectors endpoint
     * 
     * @return List<EmissionSector>
     */
    @GetMapping
    public List<EmissionSector> findAll() {
        return service.findAllEmissionSectors();
    }

}

@RestController
@RequestMapping("/api/visual5/emission-subsectors")
class EmissionSubSectorController {

    @Autowired
    private Visual5Service service;

    /**
     * Get all emission subsectors endpoint
     *
     * @return List<EmissionSubSector>
     */
    @GetMapping
    public List<EmissionSubSector> findAll() {
        return service.findAllEmissionSubSectors();
    }

    /**
     * Get sector's subsector emissions endpoint
     * 
     * @param sectorId
     * @return List<EmissionSubSector>
     */
    @GetMapping("/{sectorId}")
    public List<EmissionSubSector> getEmissionSubSectorsBySectorId(@PathVariable Integer sectorId) {
        return service.findEmissionSubSectorsBySectorId(sectorId);
    }
}