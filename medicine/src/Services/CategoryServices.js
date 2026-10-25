import axios from "axios";

const BASE_URL = "http://localhost:8081/category";

class CategoryService {

    getAllCategory() {
        return axios.get(BASE_URL + "/all");
    }

    saveCategory(category) {
        return axios.post(BASE_URL + "/save", category);
    }

    updateCategory(category) {
        return axios.put(BASE_URL + "/update", category);
    }

    deleteCategory(id) {
        return axios.delete(BASE_URL + "/delete/" + id);
    }

}

const categoryService = new CategoryService();

export default categoryService;