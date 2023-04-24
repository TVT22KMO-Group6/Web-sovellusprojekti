package com.group6.sovellusprojekti.model;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserVisualizationRepository extends JpaRepository<UserVisualization, Long> {
    List<UserVisualization> findByUserId(Long userId);
}