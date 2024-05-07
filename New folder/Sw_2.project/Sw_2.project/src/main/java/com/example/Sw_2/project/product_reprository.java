package com.example.Sw_2.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface product_reprository extends JpaRepository<product_model,Integer>{

}
