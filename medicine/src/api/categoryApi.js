import api from "./axiosConfig";

export const getAllCategory = () => {
    return api.get("/category/all");
};

export const getCategoryById = (id) => {
    return api.get(`/category/${id}`);
};

export const saveCategory = (category) => {
    return api.post("/category/save", category);
};

export const updateCategory = (category) => {
    return api.put("/category/update", category);
};

export const deleteCategory = (id) => {
    return api.delete(`/category/delete/${id}`);
};