package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "territorial_emissions")
public class TEmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Float emission;
    private int year;
    private String country;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Float getTEmission() {
        return emission;
    }

    public void setTEmission(Float emission) {
        this.emission = emission;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}
