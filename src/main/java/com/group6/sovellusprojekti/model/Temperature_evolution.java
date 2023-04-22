package com.group6.sovellusprojekti.model;

import javax.persistence.*;

@Entity
@Table(name = "temperature_evolution")
public class Temperature_evolution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int year;

    private long data;

    private String eventtext;

    private String type;

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

    public long getData() {
        return data;
    }

    public void setData(long data) {
        this.data = data;
    }

    public String getEventText(){
        return eventtext;
    }

    public void setEventText(String eventtext) {
        this.eventtext = eventtext;
    }

    public String getType(){
        return type;
    }

    public void setType(String type){
        this.type = type;
    }
}
