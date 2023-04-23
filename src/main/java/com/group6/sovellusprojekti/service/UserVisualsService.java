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

    public Optional<UserVisualization> getById(Long id) {
        return userVisualizationRepository.findById(id);
    }

    public List<UserVisualization> getUserVisuals(String username) {
        User user = userRepository.findByUsername(username);
        return userVisualizationRepository.findByUserId(user.getId());
    }

    public void deleteUserVisualById(Long id) {
        userVisualizationRepository.deleteById(id);
    }
}
