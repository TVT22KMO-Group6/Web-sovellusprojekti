package com.group6.sovellusprojekti.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group6.sovellusprojekti.model.User;
import com.group6.sovellusprojekti.model.UserVisualization;
import com.group6.sovellusprojekti.service.UserService;
import com.group6.sovellusprojekti.service.UserVisualsService;

import java.security.Principal;

@RestController
@RequestMapping("/api/user/visual")
public class UserVisualController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserVisualsService userVisualsService;

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVisual(Principal principal, @PathVariable Long id) {
        try {
            User user = userService.getUserByUsername(principal.getName());
            Optional<UserVisualization> userVisualization = userVisualsService.getById(id);
            if (!userVisualization.isPresent()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            if (userVisualization.get().getUser().getId() != user.getId()) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            userVisualsService.deleteUserVisualById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<List<UserVisualization>> list(@AuthenticationPrincipal UserDetails userDetails) {
        List<UserVisualization> types = userVisualsService.getUserVisuals(userDetails.getUsername());
        return ResponseEntity.ok(types);
    }
}
