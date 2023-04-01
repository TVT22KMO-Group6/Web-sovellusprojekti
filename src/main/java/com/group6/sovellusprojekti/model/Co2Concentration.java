package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "co2_concentrations")
public class Co2Concentration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer year;
    private Integer month;
    private Double data;
    private String timeframe;
    @Column(name = "ice_core")
    private Integer iceCore;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Double getData() {
        return data;
    }

    public void setData(Double data) {
        this.data = data;
    }

    public String getTimeframe() {
        return timeframe;
    }

    public void setTimeframe(String timeframe) {
        this.timeframe = timeframe;
    }
 
    public Integer getIceCore() {
        return iceCore;
    }
    
    public void setIceCore(Integer iceCore) {
        this.iceCore = iceCore;
    }
}
