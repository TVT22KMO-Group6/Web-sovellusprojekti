package com.group6.sovellusprojekti.service;

import com.group6.sovellusprojekti.model.EmissionSector;
import com.group6.sovellusprojekti.model.EmissionSubSector;
import com.group6.sovellusprojekti.model.EmissionSectorRepository;
import com.group6.sovellusprojekti.model.EmissionSubSectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Visual5Service {

    @Autowired
    private EmissionSectorRepository emissionSectorRepository;

    @Autowired
    private EmissionSubSectorRepository emissionSubSectorRepository;

    public List<EmissionSector> findAllEmissionSectors() {
        return emissionSectorRepository.findAll();
    }

    public List<EmissionSubSector> findAllEmissionSubSectors() {
        return emissionSubSectorRepository.findAll();
    }

    public List<EmissionSubSector> findEmissionSubSectorsBySectorId(Integer sectorId) {
        return emissionSubSectorRepository.findByEmissionSector_Id(sectorId);
    }
}
