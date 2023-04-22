package com.group6.sovellusprojekti.service;

import com.group6.sovellusprojekti.model.User;
import com.group6.sovellusprojekti.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EncoderService encoderService; 

    public void registerUser(User user) {

        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        user.setPassword(encoderService.encode(user.getPassword()));
        userRepository.save(user);
    }

    public User getUserByUsername(String username)
    {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        return userRepository.findByUsername(username);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}