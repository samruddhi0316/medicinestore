package com.medicine.stores.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicine.stores.entity.Medicine;
import com.medicine.stores.Repository.MedicineRepo;

@Service
public class MedicineServices {

    @Autowired
    private MedicineRepo medicine_repo;


    // Save Medicine
    public void saveMedicine(Medicine medicine) {
        medicine_repo.save(medicine);
    }


    // Get All Medicine
    public List<Medicine> getAllMedicine() {
        return medicine_repo.findAll();
    }


    // Get Medicine By Id
    public Optional<Medicine> getMedicine(Long id) {
        return medicine_repo.findById(id);
    }


    // Update Medicine
    public Medicine updateMedicine(Medicine medicine) {

    	Medicine old_medicine = medicine_repo.getReferenceById(medicine.getId());

        old_medicine.setName(medicine.getName());
        old_medicine.setDescription(medicine.getDescription());
        old_medicine.setPrice(medicine.getPrice());
        old_medicine.setQuantity(medicine.getQuantity());
        old_medicine.setCategory(medicine.getCategory());

        medicine_repo.save(old_medicine);

        return old_medicine;
    }


    // Delete Medicine
    public void deleteMedicine(Long id) {
        medicine_repo.deleteById(id);
    }
}