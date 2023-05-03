package com.group6.sovellusprojekti.service;

import com.group6.sovellusprojekti.model.User;
import com.group6.sovellusprojekti.model.UserRepository;
import com.group6.sovellusprojekti.model.UserVisualization;
import com.group6.sovellusprojekti.model.UserVisualizationRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserVisualsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserVisualizationRepository userVisualizationRepository;

    /**
     * Get used visualization by id
     * 
     * @param id
     * @return Optional<UserVisualization>
     */
    public Optional<UserVisualization> getById(Long id) {
        return userVisualizationRepository.findById(id);
    }

    /**
     * Get user visualization by url
     * 
     * @param url
     * @return UserVisualization
     */
    public UserVisualization getByUrl(String url) {
        return userVisualizationRepository.findByUrl(url);
    }

    /**
     * Get all user visualizations by username
     * 
     * @param username
     * @return List<UserVisualization>
     */
    public List<UserVisualization> getUserVisuals(String username) {
        User user = userRepository.findByUsername(username);
        return userVisualizationRepository.findByUserId(user.getId());
    }

    /**
     * Save user visualization
     * 
     * @param userVisual
     * @return UserVisualization
     */
    public UserVisualization saveUserVisual(UserVisualization userVisual) {
        return userVisualizationRepository.save(userVisual);
    }

    /**
     * Delete user visualization
     * 
     * @param id
     */
    public void deleteUserVisualById(Long id) {
        userVisualizationRepository.deleteById(id);
    }
}
