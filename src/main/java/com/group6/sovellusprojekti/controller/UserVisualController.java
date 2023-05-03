package com.group6.sovellusprojekti.controller;

import java.util.List;
import java.util.Optional;

import org.apache.commons.text.RandomStringGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    /**
     * Save user visualization endpoint
     * 
     * @param principal
     * @param userVisual
     * @return UserVisualization
     */
    @PostMapping
    public UserVisualization saveVisual(Principal principal, @RequestBody UserVisualization userVisual) {
        User user = userService.getUserByUsername(principal.getName());
        userVisual.setUser(user);
        RandomStringGenerator urlGenerator = new RandomStringGenerator.Builder().withinRange('0', 'z').filteredBy(Character::isLetterOrDigit).build();
        userVisual.setUrl(urlGenerator.generate(8));
        return userVisualsService.saveUserVisual(userVisual);
    }

    /**
     * Get custom user visualization endpoint
     *
     * @param url
     * @return UserVisualization
     */
    @GetMapping("/{url}")
    public UserVisualization getVisual(@PathVariable String url) {
        return userVisualsService.getByUrl(url);
    }

    /**
     * Delete custom user visualization endpoint
     *
     * @param principal
     * @param id
     * @return ResponseEntity<?>
     */
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

    /**
     * Get all user custom visualizations endpoint
     * 
     * @param userDetails
     * @return ResponseEntity<List<UserVisualization>>
     */
    @GetMapping
    public ResponseEntity<List<UserVisualization>> list(@AuthenticationPrincipal UserDetails userDetails) {
        List<UserVisualization> types = userVisualsService.getUserVisuals(userDetails.getUsername());
        return ResponseEntity.ok(types);
    }
}
