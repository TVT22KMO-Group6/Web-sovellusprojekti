package com.group6.sovellusprojekti.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class PageController {
    @GetMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
}