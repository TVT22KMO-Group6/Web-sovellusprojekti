package com.group6.sovellusprojekti.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EncoderService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Constructor
     */
    public EncoderService() {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    /**
     * Pasword encoder
     *
     * @param password
     * @return
     */
    public String encode(String password) {
        return bCryptPasswordEncoder.encode(password);
    }

    /**
     * Check that raw password matches encoded password
     * 
     * @param rawPassword
     * @param encodedPassword
     * @return boolean
     */
    public boolean matches(String rawPassword, String encodedPassword) {
        return bCryptPasswordEncoder.matches(rawPassword, encodedPassword);
    }
}