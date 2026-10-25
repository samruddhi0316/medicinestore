import axios from "axios";

const BASE_URL = "http://localhost:8081/medicine";

class MedicineService {

    getAllMedicine() {
        return axios.get(BASE_URL + "/all");
    }

    saveMedicine(medicine) {
        return axios.post(BASE_URL + "/save", medicine);
    }

    getMedicine(id) {
        return axios.get(BASE_URL + "/" + id);
    }

    updateMedicine(medicine) {
        return axios.put(BASE_URL + "/update", medicine);
    }

    deleteMedicine(id) {
        return axios.delete(BASE_URL + "/delete/" + id);
    }

}

const medicineService = new MedicineService();

export default medicineService;