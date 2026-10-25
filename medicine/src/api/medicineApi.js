import api from "./axiosConfig";

export const getAllMedicine = () => {
    return api.get("/medicine/all");
};

export const getMedicineById = (id) => {
    return api.get(`/medicine/${id}`);
};

export const saveMedicine = (medicine) => {
    return api.post("/medicine/save", medicine);
};

export const updateMedicine = (medicine) => {
    return api.put("/medicine/update", medicine);
};

export const deleteMedicine = (id) => {
    return api.delete(`/medicine/delete/${id}`);
};