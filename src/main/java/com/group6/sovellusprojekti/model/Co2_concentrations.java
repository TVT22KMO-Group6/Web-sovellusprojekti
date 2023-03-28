package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "co2_concentrations")
public class Co2_concentrations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int year;

    private Integer month;

    @Column(name = "data")
    private float data;

    @Column(name = "timeframe")
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

    public float getData() {
        return data;
    }

    public void setData(float data) {
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