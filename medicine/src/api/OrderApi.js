import api from "./axiosConfig";

export const getAllOrder = () => {
    return api.get("/order/all");
};

export const getOrderById = (id) => {
    return api.get(`/order/${id}`);
};

export const saveOrder = (order) => {
    return api.post("/order/save", order);
};

export const updateOrder = (order) => {
    return api.put("/order/update", order);
};

export const deleteOrder = (id) => {
    return api.delete(`/order/delete/${id}`);
};