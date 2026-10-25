package com.medicine.stores.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name="categories")
public class Category {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_id")
    private Long id;



    @Column(name="category_name", nullable=false, unique=true)
    private String category;



    private String description;




    // Default Constructor

    public Category(){

    }





    // Parameterized Constructor

    public Category(String category, String description){

        this.category = category;

        this.description = description;

    }





    // Getter Setter


    public Long getId(){

        return id;

    }


    public void setId(Long id){

        this.id = id;

    }




    public String getCategory(){

        return category;

    }



    public void setCategory(String category){

        this.category = category;

    }





    public String getDescription(){

        return description;

    }




    public void setDescription(String description){

        this.description = description;

    }


}