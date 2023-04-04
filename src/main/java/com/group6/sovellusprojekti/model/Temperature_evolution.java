package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "temperature_evolution")
public class Temperature_evolution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int year;

    private int data;

    private String event;

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

    public float getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }

    public String getEvent(){
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }
}
