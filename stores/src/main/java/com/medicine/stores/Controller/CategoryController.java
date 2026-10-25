package com.medicine.stores.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medicine.stores.entity.Category;
import com.medicine.stores.Services.CategoryServices;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryServices cate_serv;

    // Save Category
    @PostMapping("/save")
    public String saveCategory(@RequestBody Category category) {
        cate_serv.saveCategory(category);
        return "Category Saved Successfully!";
    }

    // Get All Categories
    @GetMapping("/getAll")
    public List<Category> getAllCategory() {
        return cate_serv.getAllCategory();
    }

    // Get Category By Id
    @GetMapping("/get/{id}")
    public Optional<Category> getCategory(@PathVariable Long id) {
        return cate_serv.getCategory(id);
    }

    // Update Category
    @PutMapping("/update")
    public String updateCategory(@RequestBody Category category) {
        cate_serv.updateCategory(category);
        return "Category Updated Successfully!";
    }

    // Delete Category
    @DeleteMapping("/delete/{id}")
    public String deleteCategory(@PathVariable Long id) {
        cate_serv.deleteCategory(id);
        return "Category Deleted Successfully!";
    }
}