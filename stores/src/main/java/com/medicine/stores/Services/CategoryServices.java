package com.medicine.stores.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicine.stores.entity.Category;
import com.medicine.stores.Repository.CategoryRepo;

@Service
public class CategoryServices {

    @Autowired
    private CategoryRepo cate_repo;

    // Save Category
    public void saveCategory(Category category) {
        cate_repo.save(category);
    }

    // Get All Categories
    public List<Category> getAllCategory() {
        return cate_repo.findAll();
    }

    // Get Category By Id
    public Optional<Category> getCategory(Long id) {
        return cate_repo.findById(id);
    }

    // Update Category
    public Category updateCategory(Category category) {

        Category oldCategory = cate_repo.findById(category.getId())
                .orElseThrow(() -> new RuntimeException("Category Not Found"));

        oldCategory.setCategory(category.getCategory());
        oldCategory.setDescription(category.getDescription());

        return cate_repo.save(oldCategory);
    }

    // Delete Category
    public void deleteCategory(Long id) {
        cate_repo.deleteById(id);
    }
}