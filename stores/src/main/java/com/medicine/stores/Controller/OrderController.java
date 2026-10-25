package com.medicine.stores.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medicine.stores.entity.Order;
import com.medicine.stores.Services.OrderServices;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderServices orderService;


    // Add Order
    @PostMapping("/save")
    public String saveOrder(@RequestBody Order order) {

        orderService.saveOrder(order);

        return "Order Saved Successfully";
    }


    // Get All Orders
    @GetMapping("/all")
    public List<Order> getAllOrder() {

        return orderService.getAllOrder();
    }


    // Get Order By Id
    @GetMapping("/{id}")
    public Optional<Order> getOrder(@PathVariable Long id) {

        return orderService.getOrder(id);
    }


    // Update Order
    @PutMapping("/update")
    public Order updateOrder(@RequestBody Order order) {

        return orderService.updateOrder(order);
    }


    // Delete Order
    @DeleteMapping("/delete/{id}")
    public String deleteOrder(@PathVariable Long id) {

        orderService.deleteOrder(id);

        return "Order Deleted Successfully";
    }
}