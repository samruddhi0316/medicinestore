package com.medicine.stores.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.stores.entity.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {

}