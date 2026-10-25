package com.medicine.stores.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="orders")
public class Order {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id")
    private Long id;



    @Column(name="customer_name", nullable=false)
    private String customerName;



    @Column(name="mobile_no", nullable=false)
    private String mobileNo;



    private Integer quantity;



    @Column(name="total_price")
    private Double totalPrice;



    private LocalDate orderDate;



    private String status;




    // Default Constructor

    public Order(){

    }




    // Parameterized Constructor

    public Order(String customerName,
                 String mobileNo,
                 Integer quantity,
                 Double totalPrice,
                 LocalDate orderDate,
                 String status) {


        this.customerName = customerName;

        this.mobileNo = mobileNo;

        this.quantity = quantity;

        this.totalPrice = totalPrice;

        this.orderDate = orderDate;

        this.status = status;

    }





    // Getters Setters


    public Long getId() {

        return id;

    }


    public void setId(Long id) {

        this.id = id;

    }



    public String getCustomerName() {

        return customerName;

    }


    public void setCustomerName(String customerName) {

        this.customerName = customerName;

    }



    public String getMobileNo() {

        return mobileNo;

    }


    public void setMobileNo(String mobileNo) {

        this.mobileNo = mobileNo;

    }



    public Integer getQuantity() {

        return quantity;

    }


    public void setQuantity(Integer quantity) {

        this.quantity = quantity;

    }



    public Double getTotalPrice() {

        return totalPrice;

    }


    public void setTotalPrice(Double totalPrice) {

        this.totalPrice = totalPrice;

    }



    public LocalDate getOrderDate() {

        return orderDate;

    }


    public void setOrderDate(LocalDate orderDate) {

        this.orderDate = orderDate;

    }



    public String getStatus() {

        return status;

    }


    public void setStatus(String status) {

        this.status = status;

    }

}