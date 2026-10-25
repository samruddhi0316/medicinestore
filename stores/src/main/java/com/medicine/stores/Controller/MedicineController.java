package com.medicine.stores.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medicine.stores.entity.Medicine;
import com.medicine.stores.Services.MedicineServices;

@RestController
@RequestMapping("/medicine")
public class MedicineController {

    @Autowired
    private MedicineServices medicine_serv;

    // Save Medicine
    @PostMapping("/save")
    public String saveMedicine(@RequestBody Medicine medicine) {
        medicine_serv.saveMedicine(medicine);
        return "Medicine saved successfully!";
    }

    // Get All Medicines
    @GetMapping("/getAll")
    public List<Medicine> getAll() {
        return medicine_serv.getAllMedicine();
    }

    // Get Medicine by ID
    @GetMapping("/get/{id}")
    public Optional<Medicine> getMedicine(@PathVariable Long id) {
        return medicine_serv.getMedicine(id);
    }

    // Update Medicine
    @PutMapping("/update")
    public String updateMedicine(@RequestBody Medicine medicine) {
        medicine_serv.updateMedicine(medicine);
        return "Medicine updated successfully!";
    }

    // Delete Medicine
    @DeleteMapping("/delete/{id}")
    public String deleteMedicine(@PathVariable Long id) {
        medicine_serv.deleteMedicine(id);
        return "Medicine deleted successfully!";
    }
}