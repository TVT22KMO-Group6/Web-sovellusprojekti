package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "emission")
public class TEmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String emission;
    private float year;
    private float country;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTEmission() {
        return emission;
    }

    public void setTEmission(String emission) {
        this.emission = emission;
    }

    public float getYear() {
        return year;
    }

    public void setYear(float year) {
        this.year = year;
    }
    public float getCountry() {
        return country;
    }

    public void setCountry(float country) {
        this.country = country;
    }

}
