package com.medicine.stores.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicine.stores.entity.Order;
import com.medicine.stores.Repository.OrderRepo;

@Service
public class OrderServices {

    @Autowired
    private OrderRepo order_repo;


    // Save Order
    public void saveOrder(Order order) {
        order_repo.save(order);
    }


    // Get All Orders
    public List<Order> getAllOrder() {
        return order_repo.findAll();
    }


    // Get Order By Id
    public Optional<Order> getOrder(Long id) {
        return order_repo.findById(id);
    }


    // Update Order
    public Order updateOrder(Order order) {

    	Order old_order = order_repo.getReferenceById(order.getId());

        old_order.setCustomerName(order.getCustomerName());
        //old_order.setMedicineName(order.getMedicineName());
        old_order.setQuantity(order.getQuantity());
        old_order.setTotalPrice(order.getTotalPrice());
        old_order.setOrderDate(order.getOrderDate());

        order_repo.save(old_order);

        return old_order;
    }


    // Delete Order
    public void deleteOrder(Long id) {
        order_repo.deleteById(id);
    }
}