package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "co2_emission_sub_sector")
public class EmissionSubSector {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "co2_emission_sector_id", referencedColumnName = "id")
    private EmissionSector emissionSector;

    private String sector;
    private Double share;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public EmissionSector getEmissionSector() {
        return emissionSector;
    }

    public void setEmissionSector(EmissionSector emissionSector) {
        this.emissionSector = emissionSector;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public Double getShare() {
        return share;
    }

    public void setShare(Double share) {
        this.share = share;
    }
}