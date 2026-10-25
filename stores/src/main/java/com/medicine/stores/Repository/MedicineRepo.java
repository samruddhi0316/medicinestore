package com.medicine.stores.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.stores.entity.Medicine;

@Repository
public interface MedicineRepo extends JpaRepository<Medicine, Long> {

}