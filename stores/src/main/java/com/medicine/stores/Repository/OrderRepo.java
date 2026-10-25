package com.medicine.stores.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicine.stores.entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {

}