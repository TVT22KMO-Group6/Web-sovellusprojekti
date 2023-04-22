package com.group6.sovellusprojekti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.User;
import com.group6.sovellusprojekti.service.UserService;

@RestController
@RequestMapping("/api/user/profile")
public class UserVisualController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public User getUser(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userService.getUserByUsername(userDetails.getUsername());
        return user;
    }
}
